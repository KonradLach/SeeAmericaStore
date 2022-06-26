import React from "react";
const Item = ({src, name,desc,cost, click}) => {
    return (
      <div className="item-wrapper">
        <img className="item-image" src={src}></img>
        <div className="item-name">{name}</div>
        <div className="item-des">Item Description: {desc}</div>
        <div className="item-cost">Cost: ${cost}</div>
        <button onClick={click}>Add to Cart</button>
      </div>
    );
  };
  
  export default Item;