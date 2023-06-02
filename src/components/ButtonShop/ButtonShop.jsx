import React from "react";
import styleButtonShop from "./ButtonShop.module.css";

export function ButtonShop({id}){
    const ActionShop = (e) => {
        console.log(e.target.id);
    }
    return(
        <section className={styleButtonShop.contentButton}>
            <button id={id} className={styleButtonShop.button} onClick={ActionShop}>Comprar</button>
            
        </section>
    )
}