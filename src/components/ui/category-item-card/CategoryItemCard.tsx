import React, {FC} from 'react';
import styles from  "./CategoryItemCard.module.css";
import {Product} from "../../../types";
import Utils from "../../../utils/utils"
import upArrow from "../../../assets/card-up-arrow.svg"

interface Props {
    product: Product;
    onSelect: () => void;
}

const CategoryItemCard:FC<Props> = ({onSelect, product}) => {

    return (
        <div className={styles.itemContainer} onClick={onSelect}>
            <img className={styles.itemImage} alt={"itemImage"} src={product.imageUrl} width={92} height={116}/>
            <div className={styles.description}>
                <span>{product.title}</span>
                <span>#{product.identity}</span>
                <span>{Utils.cutItemDescription(product.description)}</span>
                <div className={styles.tokens}>
                    <div className={styles.token}>
                        <img src={product?.requestedAsset?.logoUrl}
                              className={styles.assetIcon}
                             alt={product.requestedAsset?.ticker || product.requestedAsset?.originalTicker}
                              width='26px' height='26px'/>
                              <div>Token</div>
                    </div>
                    <div className={styles.token}>
                        <img src={product.requestedAsset?.locatedZone?.logoUrl}
                             className={styles.assetIcon}
                             alt={product.requestedAsset?.locatedZone?.name}
                             width='26px' height='26px'/>
                             <div>Blockchain</div>
                    </div>
                </div>
            </div>
            <img src={upArrow} alt={"upArrow"} width={24} height={24} className={styles.upArrow}/>
        </div>
    );
};

export default CategoryItemCard;