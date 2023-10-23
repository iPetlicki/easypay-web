import React, {useState, useRef, useEffect} from 'react';
import styles from "./TokenSelect.module.css";
import {useGetTokensQuery} from "../../../redux/api/assetsApi";
import {Asset} from "../../../types";
import dropdownArrow from "../../../assets/dropdown-arrow.svg"
import TokenPanel from "./token-panel/TokenPanel";

const TokenSelect = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const {data:tokens, isLoading} = useGetTokensQuery()
    const [isListVisible, setIsListVisible] = useState<boolean>(false)
    const [changedToken, setChangedToken] = useState<Asset>()
    const getTokenByDenom = (denom:string) => {
        const changedToken = tokens?.filter(token => token.denom === denom)[0]
        setChangedToken(changedToken)
        setIsListVisible(false)
    }
    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.mainContainer}>
            <div className={styles.select} onClick={() => setIsListVisible(!isListVisible)}>
                    {!changedToken ?
                        <div className={styles.startInput}>
                            <span>Choose a token</span>
                            <img src={dropdownArrow}/>
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
    );
};

export default TokenSelect;