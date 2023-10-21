import React, {FC} from 'react';
import styles from "./CommonPanel.module.css";

interface Props {
    children: React.ReactNode;
}

const CommonPanel:FC<Props> = ({children}) => {
    return (
        <div className={styles.commonPanelContainer}>
            {children}
        </div>
    );
};

export default CommonPanel;