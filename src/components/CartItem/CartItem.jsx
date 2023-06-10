import React from "react";
import styleCartItem from "./CartItem.module.css";
import imgRopa2 from "../../assets/pantalon.png";


export function CartItem({title,img,price,cant}){
    return (
        <tr className={styleCartItem.main}>
            <td className={styleCartItem.item}><img className={styleCartItem.img} src={img} alt="" /></td>
            <td className={styleCartItem.item}>{title}</td>
            <td className={styleCartItem.item}>{price}</td>
            <td className={styleCartItem.item}>{cant}</td>
            <td className={styleCartItem.item}>{price * cant}</td>
            <td className={styleCartItem.itemDelete}><button className={styleCartItem.delete}>Borrar</button></td>
        </tr>
    )
}