import React,{ createContext, useState } from "react";

export const context = createContext();

export function GenericContext( {children} ){
    const [ stateCart , setStateCart] = useState([]);

    const addToCart = (prod) => {
        /* setStateCart([...stateCart,prod]) */ //equivalente a --> setStateCart(stateCart.concat(prod))//
        if(prod.cant === 0){
            alert("tiene que poner una cantidad mayor a 0");
        }else{
            const prodAdd = stateCart.some(elem => elem.id === prod.id)
            /* console.log(prodAdd); */
            if(prodAdd){
                stateCart.map(p => {
                    if(p.id === prod.id){
                        p.cant += prod.cant;
                    }
                })
                /* console.log(stateCart) */
            }
            else{
                setStateCart([...stateCart,prod])
            }
        }
    }

    const list = stateCart;

    /* console.log(stateCart) */

    return (
        <context.Provider value={{ stateCart, addToCart,list }}>
            {/* <h1 className={styleGeneric.title}>shop</h1> */}
            { children }
        </context.Provider>
    )
}