import React from "react";
import styleButtonShop from "./ButtonShop.module.css";


export function ButtonShop({id, title, descrip, price, img, cant,addToCart}){
    const ActionShop = () => {
        /* console.log(id,{title}); */
        addToCart({id:id,title:title,descrip:descrip,cant:cant,price:price,img:img})
    }
    return(
        <section className={styleButtonShop.contentButton}>
            <button id={id} className={styleButtonShop.button} onClick={ActionShop}>Comprar</button>
        </section>
    )
} 