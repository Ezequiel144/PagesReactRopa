import React from "react";
import stylePagesCart from "./PagesCart.module.css";
import { CartItem } from "../../components/CartItem/CartItem";

export function PagesCart(){
    return(
        <main className={stylePagesCart.main}>
            <CartItem />
            <CartItem />
            <CartItem />
        </main>
    )
}