import Card from "./Card";
import ProductDate from "./ProductDate";
import "./ProductItem.css";
import { useState } from "react";

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);
 
  function clickHandler() {
   
    console.log("button clicked");
    setTitle("popCorn");
    console.warn(title);
  }
  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-item__Description">
        <h2>{title}</h2>
        <button onClick={clickHandler}>Add To Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
