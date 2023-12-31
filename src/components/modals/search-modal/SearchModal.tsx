import React, {FC, useState, useEffect, useRef} from 'react';
import {useNavigate} from "react-router-dom"
import styles from "./SearchModal.module.css";
import listIcon from "../../../assets/search-modal/list-icon.png";
import loading from "../../../assets/search-modal/search-loading.svg"
import {SearchModalProps} from "../../../types";
import {useGetAssetsQuery} from "../../../redux/api/assetsApi";
import {useGetInvoicesQuery} from "../../../redux/api/invoicesApi";
import Utils from "../../../utils/utils"

const SearchModal:FC<SearchModalProps> = ({searchToggle, setSearchToggle}) => {
    const {data: assets, isLoading: isLoadingAssets} = useGetAssetsQuery();
    const {data: invoices, isLoading: isLoadingInvoices} = useGetInvoicesQuery();
    const [serviceCode, setServiceCode] = useState<string>('');
    const navigate = useNavigate()

    const handleClick = (item:  { category: { name: any; }; product: { identity: any; }; }) => {
        if(item.category.name === 'Invoices') {
            navigate(`/payments/invoices/${item.product.identity}`)
        } else {
            navigate(`/catalog/${(item.category.name).toLowerCase()}/${item.product.identity}`)
        }
        setSearchToggle(false)
    }

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
                <ul className={styles.modalSearchUl}>
                    {isLoadingAssets || isLoadingInvoices
                        ?
                        <li className={styles.loading}>
                            <img src={loading} alt={""}/>
                        </li>
                        :
                        <>
                            {filteredItems.map(item => (
                                <li
                                    key={item.product.identity}
                                    className={styles.modalSearchLi}
                                    onClick={() => handleClick(item)}
                                >
                                    <img src={item.product.imageUrl === "" ? listIcon : item.product.imageUrl} alt={""}
                                         width={26} height={26}/>
                                    <span>{item.product.title}</span>
                                    <span>{item.category.name}</span>
                                    <span>#{item.product.identity}</span>
                                </li>
                            ))}
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default SearchModal;