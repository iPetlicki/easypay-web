import {Assets, Invoices} from "../types";

export default {
    transformInvoices(invoices: Invoices[])  {
        return invoices.map(function (invoice) {
            return {
                'product' :
                    {
                        title: invoice.title,
                        identity: invoice.identity,
                    },
                'category' : {
                    name: 'Invoices',
                }
            };
        });
    },

     filter(arr: Assets[], serviceCode: string){
        return arr.filter(
            (item) =>
                item.product.identity.toString().toLowerCase().includes(serviceCode.toLowerCase()) ||
                item.product.title.toLowerCase().toLowerCase().includes(serviceCode.toLowerCase()) ||
                item.category.name.toLowerCase().toLowerCase().includes(serviceCode.toLowerCase())
        );
    },

    toCapitalize(str:string) {
            return str[0].toUpperCase() + str.slice(1)
    }
}