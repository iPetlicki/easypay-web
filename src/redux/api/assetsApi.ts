import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import  {apiUrl} from "../../constants";
import {Assets, Category, Product} from "../../types";

export const assetsApi = createApi({
    reducerPath: 'assetsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${apiUrl}`}),
    endpoints: (build) => ({
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
    })
})

export const {useGetAssetsQuery, useGetCategoriesQuery, useGetCategoryItemsQuery} = assetsApi