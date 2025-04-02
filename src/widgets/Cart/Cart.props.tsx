export interface CartItem {
    title: string;
    description: string;
}

export interface CartProps {
    orderInfo: string;
    description: string;

    total: number;
    currency: string;

    items: CartItem[];
}
