import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:'cart',
    initialState: {
        cart: [],
        vt: []
    },
    // initialState: [],
    reducers: {
        addcart: (state, action)=>{
            state.cart.push(action.payload)
            
        },
        deleteItem : (state, action) =>{
            state.cart = state.cart.filter(item=>item.id !== action.payload)
            
        }
    }
})
export default cartReducer;
// export de la fonction ajouter dans le panier(global)

export const {addcart} =  cartReducer.actions
export const { deleteItem } = cartReducer.actions




// import { createSlice } from "@reduxjs/toolkit";

// const cartReducer = createSlice({
//     name :"card",
//     initialState : {
//         card : []
//     },
//     reducers: {
//         addcard: (state, action) =>{
//             // state.card.push(action.payload)
//             console.log(action);
//         }
//     }
// })


// export const { addcard } = cartReducer.actions

// export default cartReducer;

