import React, { useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {fetchProduct,removeselectedProducts} from '../redux/actions/ProductActions';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export const ProductDetail = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const product = useSelector((state) =>state.product);
  const {image,title,price,description,category} = product
const { id } = useParams(); 
const dispatch = useDispatch();
console.log(product);
useEffect(()=>{
     if(id && id !== ""){
      dispatch(fetchProduct(id));
     }
  return () =>{
    dispatch(removeselectedProducts());
  }
     
},[id])

 return(
        <>
   {Object.keys(product).length === 0 ? (
    <div>  <Stack spacing={1}>
    {/* For variant="text", adjust the height via font-size */}

    {/* For other variants, adjust the size with `width` and `height` */}
    <Skeleton variant="rectangular" width={560} height={600} sx = {{marginLeft:"470px"}} />
    <Skeleton animation="wave" />
      <Skeleton animation={false} />
    <Skeleton variant="rounded" width={210} height={60} />
  </Stack></div>
   ) : (
        <div class="card" key = {id}>
  <div class="card-header">
<img src = {image} alt = {title} style = {{marginLeft:"500px",height:"600px", width:"500px"}}/>
  </div>
  <div class="card-body">
  <h2 class="card-title" style = {{textAlign:"center",color:"black"}}>{category}</h2>
    <h1 class="card-title" style = {{textAlign:"center",color:"Grey"}}>{title}</h1>
    <h3 class="card-title" style = {{textAlign:"center"}}>${price}</h3>
    <p class="card-text" style = {{marginLeft:"100px"}}>{description}</p>
  
  </div>
</div>
   )}
        </>
    )
}