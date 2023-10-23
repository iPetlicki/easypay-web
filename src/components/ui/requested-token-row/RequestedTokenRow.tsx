import React, {FC} from 'react';
import styles from "./RequestedTokenRow.module.css";
import {Product} from "../../../types";

interface Props {
    item: Product | undefined;
}

const RequestedTokenRow:FC<Props> = ({item}) => {
    return (
        <div className={styles.requestedContainer}>
            <span className={styles.label}>Requested:</span>
            <div className={styles.field}>
                <span className={styles.tokenLabel}>Token</span>
                <div className={styles.tokenField}>
                    <div className={styles.tokenNameContainer}>
                        <img src={item?.requestedAsset?.logoUrl} alt={""}/>
                        <div>{item?.requestedAsset.ticker?.toUpperCase() || item?.requestedAsset.originalTicker?.toUpperCase()}</div>
                    </div>
                    <span>on</span>
                    <div className={styles.tokenNameContainer}>
                        <img src={item?.requestedAsset.locatedZone?.logoUrl} alt={""}/>
                        <div>{item?.requestedAsset.locatedZone?.name || item?.requestedAsset.locatedZone?.name}</div>
                    </div>
                </div>
            </div>

            <div className={styles.field}>
                <span className={styles.tokenLabel}>Amount</span>
                <div className={styles.tokenAmount}>
                    {item?.requestedAmount}
                </div>
            </div>

        </div>
    );
};

export default RequestedTokenRow;