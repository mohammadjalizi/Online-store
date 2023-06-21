import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetOneProductQuery } from 'Redux/ProudoctsApi';
import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useGetOneProductQuery(id);


  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          {" "}
          ERROR{" "}
        </Typography>
      </Box>
    );
  }


  if(data){

return  (


<>

product :{data.id}

</>

)

  }
}

export default ProductDetail