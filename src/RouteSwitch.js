import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import App from "./App";
import Store from "./Store/Store";
import Header from "./HeaderFooter/Header";
import Home from "./Home";

const RouteSwitch = ({add, quantity}) => {
  return (
    <BrowserRouter>
    <Header quantity={quantity}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store add = {add} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;