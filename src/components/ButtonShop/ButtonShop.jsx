import React from "react";
import styleButtonShop from "./ButtonShop.module.css";


export function ButtonShop({id, title, descrip, price, img, addToCart}){
    const ActionShop = () => {
        /* console.log(e.target.id); */
        addToCart({id:{id},title:{title},descrip:{descrip},price:{price},img:{img}})
    }
    return(
        <section className={styleButtonShop.contentButton}>
            <button id={id} className={styleButtonShop.button} onClick={ActionShop}>Comprar</button>
        </section>
    )
} 