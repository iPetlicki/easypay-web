import React from 'react';
import styles from "./Footer.module.css"
import githubIcon from "../../assets/footer/github-icon.svg"
import xIcon from "../../assets/footer/x-icon.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>
                <span>Developed during&nbsp;</span>
                <span>Hackathon 2023</span>
            </div>
            <div className={styles.linksBlock}>
                <a href={"https://github.com/easypay-network"} target={"_blank"} rel={"noreferrer"}>
                    <img src={githubIcon} alt={"gitHub"}/>
                </a>
                <a href={"https://twitter.com/easypay_network"} target={"_blank"} rel={"noreferrer"}>
                    <img src={xIcon} alt={"X"}/>
                </a>

            </div>
        </footer>
    );
};

export default Footer;