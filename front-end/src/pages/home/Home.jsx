
import "./Home.css";
import React from "react";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Button, CircularProgress, Stack, Typography, useTheme } from "@mui/material";
import { useGetproductsByNameQuery } from "Redux/ProudoctsApi";





const Home = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery()

console.log(data)
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
              <Button
                sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                variant="contained"
                color="primary"
              >
                Add to cart
              </Button>

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