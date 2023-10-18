import React, {FC, useState, useEffect, useRef} from 'react';
import styles from "./SearchModal.module.css";
import listIcon from "../../../assets/search-modal/list-icon.png";
import {SearchModalProps} from "../../../types";
import {useGetAssetsQuery} from "../../../redux/api/assetsApi";
import {useGetInvoicesQuery} from "../../../redux/api/invoicesApi";
import Utils from "../../../utils/utils"

const SearchModal:FC<SearchModalProps> = ({searchToggle, setSearchToggle}) => {
    const {data: assets, isLoading: isLoadingAssets} = useGetAssetsQuery();
    const {data: invoices, isLoading: isLoadingInvoices} = useGetInvoicesQuery();
    const [serviceCode, setServiceCode] = useState<string>('');
    const toggleModal = () => {
        setSearchToggle(!searchToggle);
    };
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const transformedInvoices = invoices ? Utils.transformInvoices(invoices) : [];
    const searchItems = [...assets ? assets : [], ...transformedInvoices];
    const filteredItems = Utils.filter(searchItems, serviceCode);

    return (
        <div className={styles.overlay} onClick={toggleModal}>
            <div className={styles.container} onClick={event => event.stopPropagation()}>
                <input
                    className={styles.search}
                    type={"text"}
                    ref={inputRef}
                    value={serviceCode}
                    placeholder="Search by service code #"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setServiceCode(event.target.value)}}
                />
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.product.identity}>
                                <img src={listIcon} alt={""} width={26} height={26} />
                                <span>{item.product.title}</span>
                                <span>{item.category.name}</span>
                                <span>#{item.product.identity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default SearchModal;