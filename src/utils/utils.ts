import {Category, Invoices} from "../types";

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

     filter(arr: Category[], serviceCode: string){
        return arr.filter(
            (item) =>
                item.product.identity.toString().toLowerCase().includes(serviceCode.toLowerCase()) ||
                item.product.title.toLowerCase().toLowerCase().includes(serviceCode.toLowerCase()) ||
                item.category.name.toLowerCase().toLowerCase().includes(serviceCode.toLowerCase())
        );
    }
}