import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css"
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;