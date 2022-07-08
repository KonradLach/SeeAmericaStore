import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './HeaderFooter/Header';
import RouteSwitch from './RouteSwitch';
import Home from './Home';

function App() {

  const [cart,setCart] = useState([])

const addItem = (id) => {
  console.log(cart)
  if((cart.findIndex((i) => i.id === id)) > -1){
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, "quantity": item.quantity + 1 };
        } else {
          return item;
        }
      })
    )}
    else{
      setCart([...cart, {"id":id,'quantity': 1}])
    }
  };
  // const removeItem = (name) => {
  //     setCart(cart.filter(item => name ))
  // }

  return (
    <div className="App">
      <RouteSwitch add = { addItem} cart = {cart}/>
    </div>
  );
}

export default App;
