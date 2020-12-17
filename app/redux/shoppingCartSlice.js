import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalMoney: null
    },
    reducers: {
        addToCart: {
            reducer(state, action){
                const { product } = action.payload;
                let productAlreadyInCart = false;

                state.cartItems.forEach(item => {
                    if(item._id === product._id){
                        item.cartCounter++;
                        productAlreadyInCart = true;
                    }
                });

                if(!productAlreadyInCart){
                    state.cartItems.push(product);
                }    
                
                let total = 0;
                state.cartItems.map(item => {
                    total += item.price * item.cartCounter;
                })
                state.totalMoney = total;
            },
            prepare(product){
                return { payload: { product } };
            }
        },
        decreaseHandler: {
            reducer(state, action){
                const { id } = action.payload;
                state.cartItems.forEach(item => {
                    if(item._id === id){
                        item.cartCounter--;
                    }
                });

                let total = 0;
                state.cartItems.map(item => {
                    total += item.price * item.cartCounter;
                })
                state.totalMoney = total;
            },
            prepare(id){
                return { payload: { id } };
            }
        },
        increaseHandler: {
            reducer(state, action){
                const { id } = action.payload;
                state.cartItems.forEach(item => {
                    if(item._id === id){
                        item.cartCounter++;
                    }
                });

                let total = 0;
                state.cartItems.map(item => {
                    total += item.price * item.cartCounter;
                })
                state.totalMoney = total;
            },
            prepare(id){
                return { payload: { id } };
            }
        },
    }
});

export const { 
    addToCart, 
    decreaseHandler, 
    increaseHandler, } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;