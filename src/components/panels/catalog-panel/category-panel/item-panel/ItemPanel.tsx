import React from 'react';
import {useParams, useNavigate} from "react-router-dom"
import styles from "./ItemPanel.module.css"
import {useGetItemQuery} from "../../../../../redux/api/assetsApi"
import arrow from "../../../../../assets/catalog-back-arrow.svg";
import Utils from "../../../../../utils/utils";
import CommonPanel from "../../../common-pannel/CommonPanel";

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

                    </div>
                    <img src={item?.imageUrl} alt={"item image"}/>
                </div>
            </CommonPanel>
        </>
    );
};

export default ItemPanel;