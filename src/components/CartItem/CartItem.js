import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({item}) =>{
    const {removeItem}= useContext(CartContext)
    return(
        <div className="d-flex justify-content-arround align-items-center">
            <img src={item.img} alt={item.name}/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>Subtotal : {item.quantity * item.price}</p>
            <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem