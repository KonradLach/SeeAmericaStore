import React from "react";
const Item = ({add, name, src, cost, desc}) => {
  const handleChange = () => {
    add({name});
  }
    return (
      <div className="item-wrapper">
        <img className="item-image" src={src}></img>
        <div className="item-name">{name}</div>
        <div className="item-des">Item Description: {desc}</div>
        <div className="item-cost">Cost: ${cost}</div>
        <button onClick={handleChange}>Add to Cart</button>
      </div>
    );
  };
  
  export default Item;