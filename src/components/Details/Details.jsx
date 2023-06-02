import React from "react";
import styleDetails from "./Details.module.css";
import { ButtonShop } from "../ButtonShop/ButtonShop"

export function Details({id,img,title,descrip,price}){
    return(
        <aside className={styleDetails.contentDetails}>
            <div className={styleDetails.imgDetails}>
                <img className={styleDetails.img} src={img} alt="imgMain" />
            </div>
            <div className={styleDetails.contentText}>
                <h2 className={styleDetails.title}>{title}</h2>
                <p className={styleDetails.descrip}>{descrip}</p>
                <h3 className={styleDetails.price}>${price}</h3>
                <ButtonShop 
                    id = {id}
                />
            </div>
        </aside>
    )
}