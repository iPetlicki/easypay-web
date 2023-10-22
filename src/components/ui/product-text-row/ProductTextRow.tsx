import React, {FC} from 'react';
import styles from "./ProductTextRow.module.css"

interface Props {
    label: string;
    text: string | number | undefined;
    fontSize?: number;
}

const ProductTextRow: FC<Props> = ({label, text, fontSize}) => {
    return (
        <div className={styles.textContainer}>
            <span className={styles.label}>{label}</span>
            <span style={{fontSize: fontSize}} className={styles.text}>{text}</span>
        </div>
    );
};

export default ProductTextRow;