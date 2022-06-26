import React,{useState} from "react";
import Item from "./Item"
import Teton from "./store-assests/teton.jpeg"
const Store = () => {
    const [teton,setTeton]=useState(0)
    
    const addQuan = (name) => {
        console.log("hi")
        setTeton(teton + 1)
    }

    return (
      <div className="store-wrapper">
        <h1>National Park Posters:</h1>
        <div className="collection-wrapper">
            <Item name="Grand Teton" click = {addQuan} src={Teton} cost="12.99" desc="Located in northwestern Wyoming, Grand Teton National Park protects stunning mountain scenery and a diverse array of wildlife. Rising more than 7,000 feet above the valley of Jackson Hole, the Teton Range dominates the park's skyline."></Item>
            {teton}
        </div>
      </div>
    );
  };
  
  export default Store;