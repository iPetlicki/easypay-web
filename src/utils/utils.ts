import {Assets, Invoices} from "../types";

export default {
    transformInvoices(invoices: Invoices[])  {
        return invoices.map(function (invoice) {
            return {
                'product' :
                    {
                        title: invoice.title,
                        identity: invoice.identity,
                        imageUrl: invoice.imageUrl,
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
                item.product.title.toLowerCase().includes(serviceCode.toLowerCase()) ||
                item.category.name.toLowerCase().includes(serviceCode.toLowerCase())
        );
    },

    toCapitalize(str:string) {
            return str[0].toUpperCase() + str.slice(1)
    },

    cutItemDescription(description: string) {
        return description.length > 65 ? description.slice(0, 65) + '...' : description;
    },
}