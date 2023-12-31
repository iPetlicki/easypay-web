import React, {FC} from 'react';
import styles from "./Search.module.css";
import {SearchProps} from "../../../types";

const Search: FC<SearchProps> = ({searchToggle, setSearchToggle}) => {
    const handleSearchClick = () => {
        setSearchToggle(!searchToggle);
    };

    return (
        <input
            className={!searchToggle ? styles.search : styles.hidden}
            type={"text"}
            placeholder="Search by service code #"
            onClick={handleSearchClick}
        />
    );
};

export default Search;

