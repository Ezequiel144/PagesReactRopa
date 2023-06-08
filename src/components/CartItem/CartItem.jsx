import React from "react";
import styleCartItem from "./CartItem.module.css"
import imgRopa2 from "../../assets/pantalon.png"
export function CartItem({title,img,price,cant}){
    return (
        <section className={styleCartItem.contentItem}>
            <article className={styleCartItem.contentImgProd}>
                <img className={styleCartItem.img} src={imgRopa2} alt="imgProduc" />
            </article>
            <article className={styleCartItem.contentText}>
                <h3 className={styleCartItem.title}>title title</h3>
                <p className={styleCartItem.cantProd}>0</p>
                <p className={styleCartItem.price}>total:</p>
                <button className={styleCartItem.delete}>borrar</button>
            </article>
        </section>
    )
}