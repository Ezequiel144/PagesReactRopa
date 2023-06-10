import React from "react";
import stylePagesCart from "./PagesCart.module.css";
import { CartItem } from "../../components/CartItem/CartItem";

export function PagesCart(){
    return(
        <main className={stylePagesCart.main}>
            <table className={stylePagesCart.table}>
                <tr className={stylePagesCart.tableFila}>
                    <td className={stylePagesCart.tableColumn}>Producto</td>
                    <td className={stylePagesCart.tableColumn}>Nombre</td>
                    <td className={stylePagesCart.tableColumn}>Precio</td>
                    <td className={stylePagesCart.tableColumn}>Cantidad</td>
                    <td className={stylePagesCart.tableColumn}>Total</td>
                </tr>
                <CartItem />
                <CartItem />
                <CartItem />
            </table>
        </main>
    )
}