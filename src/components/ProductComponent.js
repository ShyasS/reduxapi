import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductComponent.scss';

export const ProductComponent = () =>{
    const products  = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product)=>{
      const {id,image,title,price,category} = product;
      return(
        <div class="card" id="card1" key={id} style = {{width:240}}>
          <Link to={`/products/${id}`} style = {{textDecoration:'none', color:'black'}}>
        <img src={image} style = {{height:230,width:190,marginLeft:"30px"}}class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title" title = {title}>{title}</h5>
          <p class="card-text">${price}</p>
          <p class="card-text">{category}</p>
        </div>
        </Link>
      </div>
  );
    })

     return(
       <div className = "Maindiv">
       {renderList}
       </div>
    );
}