import { useGetOneProductQuery } from 'Redux/ProudoctsApi';
import React from 'react'

const ProductDetail = () => {
  const { data, error, isLoading } = useGetOneProductQuery(4);



  if(data){

return  (


<>

product :{data.id}

</>

)

  }
}

export default ProductDetail