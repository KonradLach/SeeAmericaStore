import React from "react";
const Item = ({add, remove, name, src, cost, desc}) => {
  const handleChange = (event) => {
    add(event.currentTarget.id,Object.values({cost}));
  }
  const handleRemove = (event) => {
    remove(event.currentTarget.id)
  }
    return (
      <div className="item-wrapper">
        <img className="item-image" src={src}></img>
        <div className="item-name">{name}</div>
        <div className="item-des">{desc}</div>
        <div className="item-cost">Cost: ${cost}</div>
        <button id={name} onClick={handleChange}>Add to Cart</button>
        <button id={name} onClick={handleRemove}>Remove From Cart</button>
      </div>
    );
  };
  
  export default Item;