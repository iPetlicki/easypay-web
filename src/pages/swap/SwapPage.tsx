import React from 'react';
import CommonPanel from "../../components/panels/common-pannel/CommonPanel";
import styles from "./SwapPage.module.css";
import Divider from "../../components/ui/divider/Divider";
import TokenSelect from "../../components/ui/token-select/TokenSelect";

const SwapPage = () => {
    return (
        <>
            <h1 className={styles.title}>Swap</h1>
            <CommonPanel>
                <div className={styles.tokensContainer}>
                    <TokenSelect label={"From:"}/>
                    <TokenSelect label={"To:"} disabledInput={true}/>
                </div>
                <Divider/>
            </CommonPanel>
        </>
    );
};

export default SwapPage;