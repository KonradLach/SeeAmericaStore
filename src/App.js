import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './HeaderFooter/Header';
import RouteSwitch from './RouteSwitch';
import Home from './Home';

function App() {

  const [cart,setCart] = useState([])

  const addItem = (id,cost) => {
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
        setCart([...cart, {"id":id,'quantity': 1,'cost':cost}])
      }
    };

  const removeItem = (id) => {
    if((cart.findIndex((i) => i.id === id)) > -1){
      setCart(
        cart.map((item) => {
          if (item.id === id && item.quantity > 0) {
            return { ...item, "quantity": item.quantity - 1 };
          } else {
            return item;
          }
        })
      )}
      else{
        setCart([...cart, {"id":id,'quantity': 1}])
      }
    };
    
  return (
    <div className="App">
      <RouteSwitch add = { addItem} remove = {removeItem} cart = {cart}/>
    </div>
  );
}

export default App;
