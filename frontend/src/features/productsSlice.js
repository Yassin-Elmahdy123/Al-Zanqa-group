import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;

            const existing = state.cartItems.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existing) {
                existing.cartQuantity += 1;
            } else {
                state.cartItems.push({ ...item, cartQuantity: 1 });
            }

            state.cartTotalQuantity += 1;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((i) => i.id !== id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
