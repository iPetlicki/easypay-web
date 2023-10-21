import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./CatalogPanel.module.css";
import {useGetCategoriesQuery} from "../../../redux/api/assetsApi"
import CatalogItem from "../../ui/catalog-item/CatalogItem";
import CommonPanel from "../common-pannel/CommonPanel";

const CatalogPanel = () => {
    const navigate = useNavigate()
    const {data: categories, isLoading} = useGetCategoriesQuery()

    return (
        <>
            <h1 className={styles.title}>Catalog</h1>
            <CommonPanel>
                <div className={styles.catalogGrid}>
                    {categories?.map(category =>
                        <CatalogItem
                            key={category.identity}
                            itemLogo={category.imageUrl}
                            itemName={category.name}
                            onSelectItem={() => navigate(`${category.name.toLowerCase()}`)}
                        />)
                    }
                </div>
            </CommonPanel>
        </>
    );
};

export default CatalogPanel;