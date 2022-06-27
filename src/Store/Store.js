import React,{useState} from "react";
import Item from "./Item"
import Teton from "./store-assests/teton.jpeg"
const Store = ({add}) => {


    return (
      <div className="store-wrapper">
        <h1>National Park Posters:</h1>
        <div className="collection-wrapper">
            <Item name="Grand Teton" add = {add} src={Teton} cost="12.99" desc="Located in northwestern Wyoming, Grand Teton National Park protects stunning mountain scenery and a diverse array of wildlife. Rising more than 7,000 feet above the valley of Jackson Hole, the Teton Range dominates the park's skyline."></Item>
        </div>
      </div>
    );
  };
  
  export default Store;