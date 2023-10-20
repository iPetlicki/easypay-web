import React, {FC, useRef, useEffect, useState} from 'react';
import styles from "./CommonButton.module.css";
import {CommonButtonProps} from "../../../types";

const CommonButton: FC<CommonButtonProps> = ({text, svg}) => {
    const [width, setWidth] = useState(0)
    const textRef = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        if (textRef.current) {
            const buttonWidth = textRef.current.offsetWidth;
            setWidth(buttonWidth)
        }
    }, []);

    return (
        <button className={styles.btn} >
            {svg}
            <span ref={textRef} style={{left: `calc(50% - ${width / 2}px`}} className={styles.text}>{text}</span>
        </button>
    );
};

export default CommonButton;