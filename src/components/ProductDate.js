import React from "react";
import './ProductDate.css';
const ProductDate = (props) =>
{
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: 'numeric' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric' });
    
  
return(
    <div className="product-date">
        <div className="product-date__month">{month}</div>
        <div className="product-date__year">{day}</div>
        <div className="product-date__day">{year}</div>
    </div>
);
};

export default ProductDate;