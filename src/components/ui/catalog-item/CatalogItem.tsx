import React, {FC} from 'react';
import styles from "./CatalogItem.module.css";
import {CatalogItemProps} from "../../../types";

const CatalogItem: FC<CatalogItemProps> = ({itemLogo, itemName, onSelectItem}) => {
    return (
        <div onClick={onSelectItem} className={styles.catalogItemContainer}>
            <img src={itemLogo} width={148} height={148} className={styles.image}/>
            <div className={styles.blur}>
                <span className={styles.title}>{itemName}</span>
            </div>
        </div>
    );
};

export default CatalogItem;