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
      const proudoctwithQuantity={...action.payload,"Quantity":1}
   state.selectedProducts.push(proudoctwithQuantity)
        },
  
    increaseQuntity: (state, action) => {
  const increasedproudoct=state.selectedProducts.find((item)=>{
return   item.id === action.payload.id  


  })
  increasedproudoct.Quantity +=1
    },
 
    decreaseQuntity: (state, action) => {
        //   state.value += action.payload

        const increasedproudoct=state.selectedProducts.find((item)=>{
          return   item.id === action.payload.id  
          
          
            })
            increasedproudoct.Quantity -=1

        },
        deletProudoct: (state, action) => {
            //   state.value += action.payload
            },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increaseQuntity,decreaseQuntity,deletProudoct } = counterSlice.actions

export default counterSlice.reducer