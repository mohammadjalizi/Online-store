import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  styled,
  IconButton,
  Badge, Typography, Divider, Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuntity } from "Redux/CartSlice";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

const Cart = () => {
  const {selectedProducts} = useSelector((state) => state.carttt)
  const dispatch = useDispatch()

  return (
    <Box>
   {selectedProducts.map(item=>{
return(

  <Paper dir="rtl" className="item-container">
  <div className="img-title-parent">
    <img src={item.imageLink} alt="" />
    <p className="product-name">{item.productName}</p>
  </div>

  <div style={{ display: "flex", alignItems: "center" }}>
    <IconButton sx={{ color: "#1976d2", ml: "10px" }} onClick={() => {

dispatch(increaseQuntity(item))

    }}>
      <Add />
    </IconButton>

    <StyledBadge badgeContent={1} color="secondary" />

    <IconButton sx={{ color: "#1976d2", mr: "10px" }} onClick={() => {}}>
      <Remove />
    </IconButton>
  </div>

  <div className="price">${item.price}</div>

  <Button sx={{display:{xs:'none',md:'inline-flex'}}} variant="text" color="error">
    delete
  </Button>
  <IconButton sx={{color:'#ef5350',display:{md:"none"}}} onClick={() => {
   
  }
  }>
    <Delete/>
  </IconButton> 
</Paper>

)

   })}
      <Paper sx={{width:"200px", mx:'auto',mt:'60px'}}>

 <Typography align="center"   p={2}> Cart summary  </Typography>
<Divider/>
<Stack sx={{justifyContent:'space-between',p:1.2} } direction={"row"}>
<Typography  > Subtotal </Typography>
<Typography  >$100  </Typography> 

</Stack>
<Divider/>
<Button fullWidth variant="contained" color="primary">
  CHECKOUT
</Button>
      </Paper>
    </Box>
  );
};

export default Cart;