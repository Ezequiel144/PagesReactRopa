import React,{ createContext, useState } from "react";

const listShop = []

export const context = createContext();

export function GenericContext( {children} ){
    let [ stateCart , setStateCart] = useState([]);

    const addToCart = (prod) => {
        setStateCart([...stateCart,prod]) //equivalente a --> setStateCart(stateCart.concat(prod))//
        
    }

    console.log(stateCart)

    return (
        <context.Provider value={{ stateCart, addToCart }}>
            {/* <h1 className={styleGeneric.title}>shop</h1> */}
            { children }
        </context.Provider>
    )
}