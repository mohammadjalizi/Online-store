
import "./Home.css";
import React from "react";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Badge, Box, Button, CircularProgress, IconButton, Stack, Typography, styled, useTheme } from "@mui/material";
import { useGetproductsByNameQuery } from "Redux/ProudoctsApi";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuntity, increaseQuntity } from "Redux/CartSlice";
import { Add, Directions, Remove } from "@mui/icons-material";





const Home = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery()
  const dispatch = useDispatch()
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#1976d2",
      color: "#fff",
    },
  }));
  const theme = useTheme();
  if (isLoading) {
    return(
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }
  
if(data){
  return (  
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map((item) => {
        return (
          <Card  className="card"   sx={{ maxWidth: 277, mb: 6, mx: 2 }}   key={item.id}     >
            <CardMedia
              component="img"
              height="277"
              image={item. imageLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
             {item.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "space-between" }}
              disableSpacing
            >
      {true?(  <div style={{ display: "flex", alignItems: "center" ,direction:"rtl" }}>
    <IconButton sx={{  ml: "10px" }} onClick={() => {

dispatch(increaseQuntity(item))

    }}>
      <Add />
    </IconButton>

    <StyledBadge badgeContent={item.Quantity} color="secondary" />

    <IconButton sx={{  mr: "10px" }} onClick={() => {

dispatch(decreaseQuntity(item))
    }}>
      <Remove />
    </IconButton>
  </div>
):(
        <Button
sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
variant="contained"
color="primary"
onClick={()=>{
dispatch(addToCart(item))


}}
>
Add to cart
</Button> 
      )}

              <Typography
                mr={1}
                variant="body1"
                color={theme.palette.error.light}
              >
            {item.price}
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );

}
};

export default Home;
