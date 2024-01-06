import ProductForm from "./components/ProductForm";
import Products from "./components/Products";

function App() {

  const products = [
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date:new Date(2021,8,10)
    },
    {
      id:'p2',
      title:'Surf Excel',
      amount:130,
      date:new Date(2021,2,14)
    },
    {
      id:'p3',
      title:'Tide',
      amount:170,
      date:new Date(2021,4,16)
    },
    {
      id:'p4',
      title:'Aerial',
      amount:300,
      date:new Date(2021,8,21)
    }
  ]
  return (
    <div>
      <ProductForm></ProductForm>
      <Products items = {products}></Products>
    </div>
  );
}

export default App;
