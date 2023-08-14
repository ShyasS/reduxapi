import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ProductComponent} from '../components/ProductComponent';
import {setProducts,fetchProducts} from '../redux/actions/ProductActions';
import axios from 'axios';
export const ProductListing = () =>{
  const products = useSelector((state)=>state);
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(fetchProducts()); 
},[])
  
    return(
        <>
          <ProductComponent/>
        </>
    )
}