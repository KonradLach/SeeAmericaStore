import React from "react";
import Item from "./Item";
import TetonIMG from "./store-assests/teton.jpeg"
import EvergladesIMG from "./store-assests/everglades.jpeg"
import BryceIMG from "./store-assests/bryce.jpeg"
import AcadiaIMG from "./store-assests/acadia.jpeg"
import BadlandsIMG from "./store-assests/badlands.jpeg"
import JoshuaIMG from "./store-assests/joshua.jpeg"
import SequoiaIMG from "./store-assests/sequoia.jpeg"
import YosemiteIMG from "./store-assests/yosemite.jpeg"
const Checkout = ({add, cart}) => {
    const GrandTeton = <Item name="Grand Teton" add = {add} src={TetonIMG} cost="16.99"></Item>
    const Everglades = <Item name="Everglades" add = {add} src={EvergladesIMG} cost="10.99"></Item>
    const Bryce = <Item name="Bryce Canyon" add = {add} src={BryceIMG} cost="14.99"></Item>
    const Acadia = <Item name="Acadia" add = {add} src={AcadiaIMG} cost="12.99"></Item>
    const Badlands = <Item name="Badlands" add = {add} src={BadlandsIMG} cost="13.99"></Item>
    const JoshuaTree = <Item name="Joshua Tree" add = {add} src={JoshuaIMG} cost="8.99"></Item>
    const Sequoia = <Item name="Sequoia" add = {add} src={SequoiaIMG} cost="9.99"></Item>
    const Yosemite = <Item name="Yosemite" add = {add} src={YosemiteIMG} cost="15.99"></Item>

    const checkCart = () =>{
        let cartContent = {}
        if(cart.includes('Grand Teton')){
            cartContent[GrandTeton] = cart.filter(x => x === 'Grand Teton').length
            console.log(cartContent[GrandTeton])
        }
        if(cart.includes('Everglades')){
            cartContent[Everglades] = cart.filter(x => x === 'Everglades').length
            console.log([Everglades])
        }
    }

    return(
        <div>
            <button onClick={checkCart}>HEKLLGSDAG </button>
        </div>
    )
}
export default Checkout