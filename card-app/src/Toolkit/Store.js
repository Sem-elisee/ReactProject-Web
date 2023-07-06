import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice";

const store = configureStore({
    reducer : {
        carts: cartReducer.reducer
    }
})
export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Slice";

// const store = configureStore({
//     reducer: {
//         cards: cartReducer.reducer
// }})
// export default store
