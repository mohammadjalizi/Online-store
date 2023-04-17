import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [],
  selectedProductsID: [],

}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const proudoctwithQuantity={...action.payload,"Quantity":1}
   state.selectedProducts.push(proudoctwithQuantity)
   state.selectedProductsID.push(action.payload.id)
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
            if (increasedproudoct.Quantity===0) {
            // delete the selected product
            const newArry=state.selectedProducts.filter((item)=>{
 return item.id !==action.payload.id
             

            })
            state.selectedProducts=newArry

            }

        },
        deletProudoct: (state, action) => {
          const newArry=state.selectedProducts.filter((item)=>{
            return item.id !==action.payload.id
            
                        
           
                       })
                       const newArry2=state.selectedProductsId.filter((item)=>{
                        return item.id !==action.payload.id
                        
                                    
                       
                                   })
                       state.selectedProducts=newArry
                       state.selectedProductsID=newArry2
            },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increaseQuntity,decreaseQuntity,deletProudoct } = counterSlice.actions

export default counterSlice.reducer