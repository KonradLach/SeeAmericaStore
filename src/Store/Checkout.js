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

    // const checkCart = () =>{
    //     let cartContent = {}
    //     if(cart.includes('Grand Teton')){
    //         cartContent['GrandTeton'] = cart.filter(x => x === 'Grand Teton').length
    //     }
    //     if(cart.includes('Everglades')){
    //         cartContent['Everglades'] = cart.filter(x => x === 'Everglades').length
    //     }
    //     if(cart.includes('Bryce Canyon')){
    //         cartContent['Bryce'] = cart.filter(x => x === 'Bryce Canyon').length
    //     }
    //     if(cart.includes('Acadia')){
    //         cartContent['Acadia'] = cart.filter(x => x === 'Acadia').length
    //     }
    //     if(cart.includes('Badlands')){
    //         cartContent['Badlands'] = cart.filter(x => x === 'Badlands').length
    //     }
    //     if(cart.includes('Joshua Tree')){
    //         cartContent['JoshuaTree'] = cart.filter(x => x === 'Joshua Tree').length
    //     }
    //     if(cart.includes('Sequoia')){
    //         cartContent['Sequoia'] = cart.filter(x => x === 'Sequoia').length
    //     }
    //     if(cart.includes('Yosemite')){
    //         cartContent['Yosemite'] = cart.filter(x => x === 'Yosemite').length
    //     }
    //     return cartContent
    // }
    const checkForTeton = () => {
        if(cart.includes('Grand Teton')){
            let quantity = cart.filter(x => x === 'Grand Teton').length
            return(
                <div>{GrandTeton} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForEverglades = () => {
        if(cart.includes('Everglades')){
            let quantity = cart.filter(x => x === 'Everglades').length
            return(
                <div>{Everglades} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForBryce = () => {
        if(cart.includes('Bryce Canyon')){
            let quantity = cart.filter(x => x === 'Bryce Canyon').length
            return(
                <div>{Bryce} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForAcadia = () => {
        if(cart.includes('Acadia')){
            let quantity = cart.filter(x => x === 'Acadia').length
            return(
                <div>{Acadia} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForBadlands = () => {
        if(cart.includes('Badlands')){
            let quantity = cart.filter(x => x === 'Badlands').length
            return(
                <div>{Badlands} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForJoshua = () => {
        if(cart.includes('Joshua Tree')){
            let quantity = cart.filter(x => x === 'Joshua Tree').length
            return(
                <div>{JoshuaTree} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForSequoia = () => {
        if(cart.includes('Sequoia')){
            let quantity = cart.filter(x => x === 'Sequoia').length
            return(
                <div>{Sequoia} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    const checkForYosemite = () => {
        if(cart.includes('Yosemite')){
            let quantity = cart.filter(x => x === 'Yosemite').length
            return(
                <div>{Yosemite} <span className="quanitiy">{quantity}</span></div>
            )
        }
    }
    return(
        <div className="store-wrapper">
            {/* {Object.entries(checkCart()).map(([key,value]) => <div>{key} : {value}</div>)} */}
            {checkForTeton()}
            {checkForAcadia()}
            {checkForBadlands()}
            {checkForBryce()}
            {checkForEverglades()}
            {checkForJoshua()}
            {checkForSequoia()}
            {checkForTeton()}
            {checkForYosemite()}
        </div>
    )
}
export default Checkout