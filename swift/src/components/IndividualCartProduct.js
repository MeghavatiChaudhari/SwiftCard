import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Icon from "@mui/material/Icon";
export const IndividualCartProduct=({cartProduct})=>{
    return(
        <div className='product'>
            <div className='product-img'>
                <img src={cartProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{cartProduct.title}</div>
            <div className='product-text description'>{cartProduct.description}</div>
            <div className='product-text price'>$ {cartProduct.price}</div>
            <span>Quantity</span>
            <div className='product-text quantity-box'>
                <div className='action-btns minus' >
                    <Icon component={RemoveIcon} size={20}/>
                </div>                
                <div>{cartProduct.qty}</div>               
                <div className='action-btns plus' >
                    <Icon component={BookmarkAddIcon} size={20}/>
                </div>
            </div>
            <div className='product-text cart-price'>$ {cartProduct.TotalProductPrice}</div>
            <div className='btn btn-danger btn-md cart-btn'>DELETE</div>            
        </div>
    )
}