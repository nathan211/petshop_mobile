import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: {
            reducer(state, action){
                const { product } = action.payload;
                let productAlreadyInCart = false;

                state.cartItems.map(item => {
                    if(item._id === product._id){
                        item.quantity++;
                        productAlreadyInCart = true;
                    }
                    return item;
                });

                if(!productAlreadyInCart){
                    state.cartItems.push(product);
                }                
            },
            prepare(product){
                return { payload: { product } };
            }
        },
    }
});

export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;