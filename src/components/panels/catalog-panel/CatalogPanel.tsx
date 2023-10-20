import React from 'react';
import styles from "./CatalogPanel.module.css";
import {useGetCategoriesQuery} from "../../../redux/api/assetsApi"
import CatalogItem from "../../ui/catalog-item/CatalogItem";

const CatalogPanel = () => {
    const {data: categories, isLoading} = useGetCategoriesQuery()
    const draft = () => {
        console.log(categories)
    }
    return (
        <>
            <h1 className={styles.title}>Catalog</h1>
            <div className={styles.panelContainer}>
                {categories?.map(category =>
                    <CatalogItem
                        key={category.identity}
                        itemLogo={category.imageUrl}
                        itemName={category.name}
                        onSelectItem={draft}/>
                    )
                }
            </div>
        </>
    );
};

export default CatalogPanel;