import React from "react";
import styleTitleMain from "./TitleMain.module.css";
import imgMain from "../../assets/ImgMain.png";

export function TitleMain(){
    return(
        <article className={styleTitleMain.contentText}>
            <h1 className={styleTitleMain.title}>hola como estas</h1>
            <p className={styleTitleMain.text}>queres comprar cosas que valgan la pena?...Esto es para vos</p>
            <div className={styleTitleMain.contentImg}>
                <img className={styleTitleMain.img} src={imgMain} alt="imgMain" />
            </div>
        </article>
    )
}