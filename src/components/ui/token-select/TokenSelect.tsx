import React, {useState, useRef, useEffect, FC} from 'react';
import styles from "./TokenSelect.module.css";
import {useGetTokensQuery} from "../../../redux/api/assetsApi";
import {Asset} from "../../../types";
import dropdownArrow from "../../../assets/dropdown-arrow.svg"
import TokenPanel from "./token-panel/TokenPanel";

interface Props {
    label:string;
    disabledInput?: boolean;
}

const TokenSelect:FC<Props> = ({label, disabledInput}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const {data:tokens, isLoading} = useGetTokensQuery()

    const [isListVisible, setIsListVisible] = useState<boolean>(false)
    const [changedToken, setChangedToken] = useState<Asset>()
    const [amount, setAmount] = useState<string>("")
    console.log(amount)

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsListVisible(false);
        }
    };


    const getTokenByDenom = (denom:string) => {
        const changedToken = tokens?.filter(token => token.denom === denom)[0]
        setChangedToken(changedToken)
        setIsListVisible(false)
    }



    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.tokenSelectTittle}>{label}</div>
            <div ref={containerRef} className={styles.selectorContainer}>
                <span className={styles.inputLabel}>Token</span>
                <div className={styles.select} onClick={() => setIsListVisible(!isListVisible)}>
                        {!changedToken ?
                            <div className={styles.startInput}>
                                <span>Choose a token</span>
                                <img alt={""} src={dropdownArrow}/>
                            </div>
                            :
                            <>
                               <TokenPanel token={changedToken}/>
                            </>
                        }
                </div>
                {isListVisible &&
                <div className={styles.tokensList}>
                    {tokens?.map(token =>
                            <div className={styles.tokenListItem} key={token.denom} onClick={() => getTokenByDenom(token.denom)}>
                                <TokenPanel token={token}/>
                            </div>
                        )
                    }
                </div>
                }
            </div>
            <div className={styles.amountContainer}>
                <span className={styles.inputLabel}>Amount</span>
                <input type={"number"}
                       disabled={disabledInput}
                       className={styles.amount}
                       value={amount}
                       onChange={event => setAmount(event.target.value)}
                />
            </div>
        </div>
    );
};

export default TokenSelect;