import { useState } from "react";
import "./ProductForm.css";

function ProductForm() {
  // handling multiple states using useEffect
  // const [productFullInput, setProductFullInput] = useState({
  //     title:'',
  //     date:''
  // })

  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  function TitleChangeHandler(e) {
    // let obj = {title:e.target.value};
    // console.log(obj);
    setTitle(e.target.value);
    // console.log(e.target.value);
  }

  function DateChangeHandler(e) {
    // let obj = {date:e.target.value};
    // console.log(obj);
    setDate(e.target.value);
  }

  function SubmitHandler(e) {
    e.preventDefault();

    const newProduct = {
        title:newTitle,
        date:newDate
    }

    console.log(newProduct);
    setTitle('');
    setDate('');
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-product__control">
        <label>Title</label>
        <input type="text" onChange={TitleChangeHandler} value={newTitle} />
      </div>

      <div className="new-product__control">
        <label>Date</label>
        <input
          type="date"
          min="2024-01-01"
          max="2024-12-12"
          onChange={DateChangeHandler}
          value={newDate}
        />
      </div>

      <div>
        <button className="new-product_button">Add Product</button>
      </div>
    </form>
  );
}

export default ProductForm;
