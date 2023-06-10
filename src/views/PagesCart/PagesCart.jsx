import React, { useContext, useState } from "react";
import stylePagesCart from "./PagesCart.module.css";
import { CartItem } from "../../components/CartItem/CartItem";
import { context } from "../../components/GenericContext/GenericContext";

export function PagesCart(){

    const { list } = useContext(context); 

    console.log(list);
    
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
                {
                    list.map((elem) => {
                        return(
                            <CartItem 
                                img={elem.img}
                                title={elem.title}
                                price={elem.price}
                                cant={elem.cant}
                            />
                        )
                    })
                }
            </table>
        </main>
    )
}