import React from 'react';
import {useParams, useNavigate} from "react-router-dom"
import styles from  "./CategoryPanel.module.css"
import Utils from "../../../../utils/utils"
import {useGetCategoryItemsQuery} from "../../../../redux/api/assetsApi";
import CategoryItemCard from "../../../ui/category-item-card/CategoryItemCard";
import arrow from "../../../../assets/catalog-back-arrow.svg"
import CommonPanel from "../../common-pannel/CommonPanel";

const CategoryPanel = () => {
    const {categoryName} = useParams()
    const navigate = useNavigate()
    const {data: products, isLoading} = useGetCategoryItemsQuery(categoryName || "")

    return (
        <>
            <div className={styles.arrowTitle}>
                <img src={arrow} alt='arrow' onClick={() => navigate("/catalog")}/>
                <h1 className={styles.title}>
                    {categoryName && Utils.toCapitalize(categoryName)}
                </h1>
            </div>
            <CommonPanel>
                <div className={styles.cardsGrid}>
                    {products?.map(product =>
                        <CategoryItemCard
                            key={product.identity}
                            product={product}
                            onSelect={() => navigate(`${product.identity}`)}
                        />
                    )}
                </div>
            </CommonPanel>
        </>
    );
};

export default CategoryPanel;