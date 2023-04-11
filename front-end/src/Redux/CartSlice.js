import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [

  ],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     console.log("donnnn")
        },
  
    increaseQuntity: (state, action) => {
  console.log("logdone")
    },
 
    decreaseQuntity: (state, action) => {
        //   state.value += action.payload
        },
        deletProudoct: (state, action) => {
            //   state.value += action.payload
            },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increaseQuntity,decreaseQuntity,deletProudoct } = counterSlice.actions

export default counterSlice.reducer