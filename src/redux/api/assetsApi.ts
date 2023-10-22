import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import  {apiUrl} from "../../constants";
import {Asset, Assets, Category, Product} from "../../types";

export const assetsApi = createApi({
    reducerPath: 'assetsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${apiUrl}`}),
    endpoints: (build) => ({
        getTokens: build.query<Asset[], void>({
            query: () => ({
                url: "/assets",
                method: "GET",
            }),
        }),
        getAssets: build.query<Assets[], void>({
            query: () => ({
                url: `/catalog/products-categories`,
                method: "GET",
            }),
        }),
        getCategories: build.query<Category[], void>({
            query: () => ({
                url: `/catalog/categories`,
                method: "GET",
            }),
        }),
        getCategoryItems: build.query<Product[], string>({
            query: (categoryName) => ({
                url: `/catalog/categories/${categoryName}/products`,
                method: "GET",
            }),
        }),
        getItem: build.query<Product, string>({
            query: (itemId) => ({
                url: `/catalog/products/${itemId}`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useGetAssetsQuery,
    useGetCategoriesQuery,
    useGetCategoryItemsQuery,
    useGetItemQuery,
    useGetTokensQuery
    } = assetsApi