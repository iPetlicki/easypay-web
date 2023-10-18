import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css"
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (): JSX.Element => {
    return (
        <>
            <Header/>
            <div className={styles.body}>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
};

export default Layout;