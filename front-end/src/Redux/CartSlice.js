import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [
    {
        id: 3,
        productName: "T-shirt",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
        price: 300,
        imageLink: "https://res.cloudinary.com/dlz1h6dhr/image/upload/v1680872470/online%20store/3_stpazu.jpg",
      },
      {
        id: 4,
        productName: "T-shirt",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
        price: 400,
        imageLink: "https://res.cloudinary.com/dlz1h6dhr/image/upload/v1680872470/online%20store/2_w4m0zr.jpg",
      },

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