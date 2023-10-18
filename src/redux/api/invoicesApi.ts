import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import  {apiUrl} from "../../constants";
import {Invoices} from "../../types";

export const invoicesApi = createApi({
    reducerPath: 'invoicesApi',
    baseQuery: fetchBaseQuery({baseUrl: `${apiUrl}`}),
    endpoints: (build) => ({
        getInvoices: build.query<Invoices[], void>({
            query: () => ({
                url: `/invoices`,
                method: "GET",
            }),
        }),
    })
})

export const {useGetInvoicesQuery} = invoicesApi