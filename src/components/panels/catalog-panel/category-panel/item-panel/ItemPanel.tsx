import React from 'react';
import {useParams, useNavigate} from "react-router-dom"
import styles from "./ItemPanel.module.css"
import {useGetItemQuery} from "../../../../../redux/api/assetsApi"
import arrow from "../../../../../assets/catalog-back-arrow.svg";
import Utils from "../../../../../utils/utils";
import CommonPanel from "../../../common-pannel/CommonPanel";
import Divider from "../../../../ui/divider/Divider";
import CommonButton from "../../../../ui/common-button/CommonButton";
import Button248 from "../../../../../assets/common-button/buttons-backgrounds/Button248";
import ProductTextRow from "../../../../ui/product-text-row/ProductTextRow";
import RequestedTokenRow from "../../../../ui/requested-token-row/RequestedTokenRow";

const ItemPanel = () => {
    const navigate = useNavigate()
    const {categoryName, itemId} = useParams()
    const {data: item, isLoading} = useGetItemQuery(itemId || "")
    return (
        <>
            <div className={styles.arrowTitle}>
                <img src={arrow} alt='arrow' onClick={() => navigate(`/catalog/${categoryName}`)}/>
                <span>{categoryName && Utils.toCapitalize(categoryName)}</span>
                <h1 className={styles.title}>
                    #{itemId && Utils.toCapitalize(itemId)}
                </h1>
            </div>
            <CommonPanel>
                <div className={styles.itemContainer}>
                    <div className={styles.description}>
                        <ProductTextRow label={"Title:"} text={item?.title} fontSize={28}/>
                        <ProductTextRow label={"Service id:"} text={`#${item?.identity}`} fontSize={20}/>
                        <ProductTextRow label={"Description:"} text={item?.description} fontSize={16}/>
                        <Divider/>
                        <ProductTextRow label={"Requester:"} text={item?.requester?.address}/>
                        <ProductTextRow label={"Receivers:"} text={item?.receiver?.address}/>
                        <RequestedTokenRow  item={item}/>
                        <Divider/>
                        <ProductTextRow label={"Creation date:"} text={item?.creationDate && `${item.creationDate.split("T")[1]} ${item.creationDate.split("T")[0]}`}/>
                        <ProductTextRow label={"Due date:"} text={item?.dueDate && `${item.dueDate.split("T")[1]} ${item.dueDate.split("T")[0]}`}/>
                        <CommonButton text={"Check out"} svg={<Button248/>} marginTop={50}/>
                    </div>
                    <img src={item?.imageUrl} className={styles.itemImage} alt={"item image"}/>
                </div>
            </CommonPanel>
        </>
    );
};

export default ItemPanel;