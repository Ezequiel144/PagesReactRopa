import React, { useState } from "react";
import styleDetails from "./Details.module.css";
import { ButtonShop } from "../ButtonShop/ButtonShop"

export function Details({id,img,title,descrip,price,addToCart}){
    const [ cant , setCant ] = useState(0);

    /* const cantPush = () => {
        setCant(cant + 1);
    } */

    const cantPull = () => {
        if(cant <= 0){
            setCant(0);
        }else{
            setCant(cant - 1);
        }
    }

    return(
        <aside className={styleDetails.contentDetails}>
            <div className={styleDetails.imgDetails}>
                <img className={styleDetails.img} src={img} alt="imgMain" />
            </div>
            <div className={styleDetails.contentText}>
                <h2 className={styleDetails.title}>{title}</h2>
                <p className={styleDetails.descrip}>{descrip}</p>
                <h3 className={styleDetails.price}>${price}</h3>
                <div className={styleDetails.contentCant}>
                    <button className={styleDetails.push} onClick={()=>{setCant(cant + 1)}}>+</button>
                    <p className={styleDetails.show}>{cant}</p>
                    <button className={styleDetails.pull} onClick={cantPull}>-</button>
                </div>
                <ButtonShop 
                    id = {id}
                    img = {img}
                    title = {title}
                    price = {price}
                    descrip = {descrip}
                    cant = {cant}
                    addToCart={addToCart}
                />
                {/* <button onClick={() => {addToCard()}}>cont</button> */}
            </div>
        </aside>
    )
}