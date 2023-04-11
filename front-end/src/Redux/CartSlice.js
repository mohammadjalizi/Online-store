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
        //   state.value += action.payload
        },
  
    increaseQuntity: (state, action) => {
    //   state.value += action.payload
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
export const { increaseQuntity,decreaseQuntity,deletProudoct } = counterSlice.actions

export default counterSlice.reducer