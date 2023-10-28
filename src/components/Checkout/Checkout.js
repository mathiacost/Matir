import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../services/firebase";
import { CartContext } from "../../Context/CartContext";


const Checkout = () => {
    const[user, setUser]=useState({})
    const[validateEmail, setValidateEmail] = useState('')
    const[orderId, setOrderId]= useState('')
    const {cart, total, clear}= useContext(CartContext)
    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
    }
    if(!user.name && !user.phone){
        alert('Complete los campos Obligatorios')
    }else{
        let order = {
            user,
            item:cart,
            total:total,
            date:serverTimestamp()
        
    }
    const ventas = collection(db, 'orders')
    addDoc(ventas,order)
    .then((res)=>{
        setOrderId(res.id)
        clear()
    })
    .catch((error)=>console.log(error))
    console.log(user)
    }
    return(
        <div>
            {orderId !==''
            ?<div>
                <h2>Gracias por completar su orden</h2>
                <h2>su numero de registro es: {orderId}</h2>
            </div> 
            :<div>
                <h2>Terminar compra</h2>
                <h5>Porfavor llenar con sus datos</h5>
                <form onSubmit={finalizarCompra}>
                    <div clasename='mb-3'>
                        <label className="formLabel">Nombre Completo</label>
                    <input className="formControl" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name" required/> 
                    </div>
                    <div clasename='mb-3'>
                    <label className="formLabel">Número de telefono</label>
                    <input className="formControl" onChange={datosComprador} type="number" placeholder="+59890000000" name="phone" required/> 
                    </div>
                    <div clasename='mb-3'>
                    <label className="formLabel">Direccion de email</label>
                    <input className="formControl" onChange={datosComprador} type="email" placeholder="correo@inbox.com" name="mail"required/> 
                    </div>
                    <div clasename='mb-3'>
                    <label className="formLabel">Repita su email</label>
                    <input className="formControl" type="email" placeholder="correo@inbox.com" name="mail" onChange={((e)=>setValidateEmail(e.target.value))}/> 
                    </div>
                    <button className="option" type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
                </form>
            </div> }
        </div>
    )
}

export default Checkout
