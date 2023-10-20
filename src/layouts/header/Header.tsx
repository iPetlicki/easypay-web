import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom"
import styles from "./Header.module.css";
import headerLogo from "../../assets/header/header-logo.png";
import Search from "../../components/ui/search/Search";
import SearchModal from "../../components/modals/search-modal/SearchModal";
import CommonButton from "../../components/ui/common-button/CommonButton";
import Button117 from "../../assets/common-button/buttons-backgrounds/Button117";

const Header = () => {
    const navigation = useNavigate()
    const [searchToggle, setSearchToggle] = useState(false)

    return (
        <header className={styles.backdrop}>
            <div className={styles.content}>
                <img src={headerLogo} alt={"header logo"} width={"138"} height={"63"} onClick={() => navigation("/")}/>
                <nav className={styles.nav}>
                    <NavLink to={"/catalog"} className={({isActive}) => isActive ? styles.active : ""}>Catalog</NavLink>
                    <NavLink to={"/payments"} className={({isActive}) => isActive ? styles.active : ""}>Payments</NavLink>
                    <NavLink to={"/swap"} className={({isActive}) => isActive ? styles.active : ""}>Swap</NavLink>
                    <NavLink to={"/integrations"} className={({isActive}) => isActive ? styles.active : ""}>Integrations</NavLink>
                    <NavLink to={"/about"} className={({isActive}) => isActive ? styles.active : ""}>About</NavLink>
                </nav>
                <Search searchToggle={searchToggle} setSearchToggle={setSearchToggle}/>
                {searchToggle && <SearchModal searchToggle={searchToggle} setSearchToggle={setSearchToggle}/>}
                <CommonButton text={"Log In"} svg={<Button117/>}/>
            </div>
        </header>
    );
};

export default Header;