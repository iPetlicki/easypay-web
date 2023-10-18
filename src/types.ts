export interface SearchModalProps {
    searchToggle: boolean;
    setSearchToggle: (newSearchToggle: boolean) => void;
}

export interface Category {
    product: {
        title: string;
        identity: number;
    };
    category: {
        name: string;
    };
}

export interface Invoices {
    title: string,
    identity: number,
}
