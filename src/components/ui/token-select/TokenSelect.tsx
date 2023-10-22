import React, {useState, useRef, useEffect} from 'react';
import styles from "./TokenSelect.module.css";
import {useGetTokensQuery} from "../../../redux/api/assetsApi";
import {Asset} from "../../../types";

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
        <div ref={containerRef}>
            <div style={{width: "300px", height:"40px", border: "1px solid white"}} onClick={() => setIsListVisible(true)}>
                <div>
                    {!changedToken ?
                        <div>Choose token</div>
                        :
                        <>
                            <span>{changedToken?.ticker || changedToken?.originalTicker}</span>
                            <img src={changedToken?.locatedZone?.logoUrl} alt={""} width={18} height={18}/>
                        </>
                    }

                </div>
            </div>
            {isListVisible &&
            <div>
                {tokens?.map(token =>
                        <div key={token.denom} onClick={() => getTokenByDenom(token.denom)}>
                            <span>{token.ticker || token.originalTicker}</span>
                            <img src={token.locatedZone.logoUrl} alt={""} width={18} height={18}/>
                        </div>
                    )
                }
            </div>
            }
        </div>
    );
};

export default TokenSelect;