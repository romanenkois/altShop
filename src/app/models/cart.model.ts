export interface Cart {
    products: Array<CartProduct>;
}

export interface CartProduct {
    id: string;
    quantity: number;
}