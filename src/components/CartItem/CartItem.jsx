import React from "react";
import styleCartItem from "./CartItem.module.css";
import imgRopa2 from "../../assets/pantalon.png";


export function CartItem({title,img,price,cant}){
    return (
        <tr className={styleCartItem.main}>
            <td className={styleCartItem.item}><img className={styleCartItem.img} src={imgRopa2} alt="" /></td>
            <td className={styleCartItem.item}>adios</td>
            <td className={styleCartItem.item}>chau</td>
            <td className={styleCartItem.item}>como estas</td>
            <td className={styleCartItem.item}>si</td>
            <td className={styleCartItem.itemDelete}><button className={styleCartItem.delete}>Borrar</button></td>
        </tr>
    )
}