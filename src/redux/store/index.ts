import { configureStore } from '@reduxjs/toolkit'
import {assetsApi} from "../api/assetsApi";
import {invoicesApi} from "../api/invoicesApi";

export const store = configureStore({
    reducer: {
        [assetsApi.reducerPath]: assetsApi.reducer,
        [invoicesApi.reducerPath]: invoicesApi.reducer,
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        // immutableCheck: { warnAfter: 128 },
        // serializableCheck: { warnAfter: 128 }
    }).concat(assetsApi.middleware).concat(invoicesApi.middleware))
})