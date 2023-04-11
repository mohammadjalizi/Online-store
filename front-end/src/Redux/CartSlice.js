import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [
"ali"

  ],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  
    incrementByAmount: (state, action) => {
    //   state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions

export default counterSlice.reducer