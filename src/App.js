import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './HeaderFooter/Header';
import RouteSwitch from './RouteSwitch';
import Home from './Home';

function App() {

  const [cart,setCart] = useState([])

  const addItem = (name) => {
      setCart([...cart, name])
      console.log(cart)
  }
  useEffect(() => {
    let quantity= cart.length;

  },[cart])
  return (
    <div className="App">
      <RouteSwitch add = { addItem} quantity = {cart}/>
    </div>
  );
}

export default App;
