import React from "react";
import './NewProduct.css';
import ProductForm from "./ProductForm";
const NewProduct = (props) =>
{
function saveProduct(product)
{
    console.log('I am inside NewProduct.js');
    console.log(product);

    // calling parent function
    props.getDataFromChild(product);
}

return(
    <div className="new-product">
      <ProductForm onSaveProduct = {saveProduct}/>
    </div>
);
};

export default NewProduct;