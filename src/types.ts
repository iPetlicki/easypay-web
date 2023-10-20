export interface Assets {
    product: {
        title: string;
        identity: number;
    };
    category: {
        name: string;
    };
}

export interface Category {
    identity: number;
    name: string;
    imageUrl: string;
    featured: boolean;
}

export interface Invoices {
    title: string,
    identity: number,
}

export interface CatalogItemProps {
    onSelectItem: () => void;
    itemLogo: string;
    itemName: string;
}

export interface CommonButtonProps {
    text: string;
    svg: React.ReactNode;
}

export interface SearchProps {
    searchToggle: boolean;
    setSearchToggle: (newSearchToggle: boolean) => void;
}

export interface SearchModalProps {
    searchToggle: boolean;
    setSearchToggle: (newSearchToggle: boolean) => void;
}
