import React from "react";

const Total = ({cart}) => {
    const calcTotal = () => {
        let total = 0;
        cart.forEach(item => {
            console.log(cart)
            total += parseInt(item.quantity)*parseFloat(item.cost);
        });
        return total
    }
    return(
        <div>
            Total:{calcTotal()}
        </div>
    )
}

export default Total