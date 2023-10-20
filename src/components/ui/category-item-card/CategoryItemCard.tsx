import React, {FC} from 'react';
import styles from  "./CategoryItemCard.module.css";
import {Product} from "../../../types";

interface Props {
    product: Product;
    onSelect: () => void;
}

const CategoryItemCard:FC<Props> = ({onSelect, product}) => {
    return (
        <div className={styles.itemContainer} onClick={onSelect}>

        </div>
    );
};

export default CategoryItemCard;