import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import App from "./App";
import Store from "./Store/Store";
import Header from "./HeaderFooter/Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;