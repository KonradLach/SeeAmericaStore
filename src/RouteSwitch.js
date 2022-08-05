import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import App from "./App";
import Store from "./Store/Store";
import Header from "./HeaderFooter/Header";
import Home from "./Home";
import Checkout from "./Store/Checkout";

const RouteSwitch = ({add, cart, remove}) => {
  return (
    <BrowserRouter>
    <Header quantity={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store add = {add} remove={remove} />} />
        <Route path="/checkout" element={<Checkout add={add} remove={remove} cart={cart}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;