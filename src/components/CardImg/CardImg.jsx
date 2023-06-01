import React from "react";
import styleCardImg from "./CardImg.module.css";

export function CardImg({id, img, name}){
    return(
        <article className={styleCardImg.contentImgSec}>
            <div className={styleCardImg.bgOpacity} ></div>
            <img id={id} className={styleCardImg.imgClothing} src={`${img}`} alt={name} />
        </article>
    )
}