export interface Cart {
    products: Array<CartProduct>;
}

export interface CartProduct {
    id: number;
    quantity: number;
}