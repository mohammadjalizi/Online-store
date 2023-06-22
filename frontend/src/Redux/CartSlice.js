import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts") ?
  JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  
  reducers: {
    addToCart: (state, action) => {
   
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    increaseQuantity: (state, action) => {
      // action.payload => product From user
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity += 1;

      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
    },

    decreaseQuantity: (state, action) => {
      // action.payload => product From user
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity -= 1;
  
      if (incresdedProuct.quantity === 0) {
        // delete the selected product
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        const newArr2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });

        state.selectedProducts = newArr;
        state.selectedProductsID = newArr2;
        localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))
      }
    },

    deleteProduct: (state, action) => {
      // action.payload => product From user
      // delete the selected product
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });

      const newArr2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });

      state.selectedProducts = newArr;
      state.selectedProductsID = newArr2;

      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
      localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))
    },
  },
});


export const { deleteProduct, addToCart, increaseQuantity, decreaseQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
