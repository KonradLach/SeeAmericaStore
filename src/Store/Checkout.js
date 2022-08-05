import React from "react";
import Item from "./Item";
import Total from "./Total";
import TetonIMG from "./store-assests/teton.jpeg"
import EvergladesIMG from "./store-assests/everglades.jpeg"
import BryceIMG from "./store-assests/bryce.jpeg"
import AcadiaIMG from "./store-assests/acadia.jpeg"
import BadlandsIMG from "./store-assests/badlands.jpeg"
import JoshuaIMG from "./store-assests/joshua.jpeg"
import SequoiaIMG from "./store-assests/sequoia.jpeg"
import YosemiteIMG from "./store-assests/yosemite.jpeg"
const Checkout = ({add, cart, remove}) => {
    const GrandTeton = <Item name="Grand Teton" add = {add} remove = {remove} src={TetonIMG} cost="16.99"></Item>
    const Everglades = <Item name="Everglades" add = {add} remove = {remove} src={EvergladesIMG} cost="10.99"></Item>
    const Bryce = <Item name="Bryce Canyon" add = {add} remove = {remove} src={BryceIMG} cost="14.99"></Item>
    const Acadia = <Item name="Acadia" add = {add} remove = {remove} src={AcadiaIMG} cost="12.99"></Item>
    const Badlands = <Item name="Badlands" add = {add} remove = {remove} src={BadlandsIMG} cost="13.99"></Item>
    const JoshuaTree = <Item name="Joshua Tree" add = {add} remove = {remove} src={JoshuaIMG} cost="8.99"></Item>
    const Sequoia = <Item name="Sequoia" add = {add} remove = {remove} src={SequoiaIMG} cost="9.99"></Item>
    const Yosemite = <Item name="Yosemite" add = {add} remove = {remove} src={YosemiteIMG} cost="15.99"></Item>


    const renderItem = (id) => {
        if(id === "Grand Teton"){
            return GrandTeton 
        }
        if(id === "Everglades"){
            return Everglades
        }
        if(id === "Bryce Canyon"){
            return Bryce
        }
        if(id === "Acadia"){
            return Acadia
        }
        if(id === "Badlands"){
            return Badlands
        }
        if(id === "Joshua Tree"){
            return JoshuaTree
        }
        if(id === "Sequoia"){
            return Sequoia
        }
        if(id === "Yosemite"){
            return Yosemite
        }
    }
    const listItems = cart.map((item)=> <div key={item.id}> {renderItem(item.id)} Quantity: {item.quantity}</div>)
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        });
        return total
    }
    return(
        <div className="store-wrapper">
            {getTotalQuantity()}
            {listItems}
            <Total cart = {cart}/>
        </div>
    )

}
export default Checkout