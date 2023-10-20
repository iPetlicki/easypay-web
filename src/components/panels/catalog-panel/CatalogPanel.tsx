import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./CatalogPanel.module.css";
import {useGetCategoriesQuery} from "../../../redux/api/assetsApi"
import CatalogItem from "../../ui/catalog-item/CatalogItem";

const CatalogPanel = () => {
    const navigate = useNavigate()
    const {data: categories, isLoading} = useGetCategoriesQuery()

    return (
        <>
            <h1 className={styles.title}>Catalog</h1>
            <div className={styles.panelContainer}>
                <div className={styles.catalogGrid}>
                    {categories?.map(category =>
                        <CatalogItem
                            key={category.identity}
                            itemLogo={category.imageUrl}
                            itemName={category.name}
                            onSelectItem={() => navigate(`${category.name.toLowerCase()}`)}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default CatalogPanel;