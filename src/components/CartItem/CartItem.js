import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = (item) =>{
    const {removeItem}= useContext(CartContext)
    
    return(
        <div className="d-flex justify-content-arround align-items-center ">
            <img className="cartItemImg cartElement" src={item.img} alt={item.name}/>
            <p className="cartElement">{item.name}</p>
            <p className="cartElement">{item.price}</p>
            <p className="cartElement">{item.quantity}</p>
            <p className="cartElement">Subtotal : {item.quantity * item.price}</p>
            <button  className="btn btn-danger " onClick={()=>removeItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem