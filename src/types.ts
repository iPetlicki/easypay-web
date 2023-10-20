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
export interface Product {
    identity: number;
    title: string;
    description: string;
    imageUrl: string;
    requestedAmount: number;
    creationDate: string;
    dueDate: string;
    receiver: {
        identity: number;
        address: string;
        relatedZone: {
            identity: number;
            logoUrl: string;
            networkId: string;
            name: string;
        };
    };
    requester: {
        identity: number;
        address: string;
    };
    requestedAsset: Asset;
}

export interface Asset {
    identity: number;
    ticker: string;
    logoUrl: string;
    denom: string;
    denomTrace: string;
    originalTicker: string;
    localTicker: string;
    locatedZone: {
        identity: number;
        logoUrl: string;
        networkId: string;
        name: string;
    }
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
