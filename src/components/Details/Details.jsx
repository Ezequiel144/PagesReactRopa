import React from "react";
import styleDetails from "./Details.module.css";

export function Details({img,title,descrip}){
    return(
        <aside className={styleDetails.contentDetails}>
            <div className={styleDetails.imgDetails}>
                <img className={styleDetails.img} src={img} alt="imgMain" />
            </div>
            <div className={styleDetails.contentText}>
                <h2 className={styleDetails.title}>{title}</h2>
                <p className={styleDetails.descrip}>{descrip}</p>
            </div>
            
        </aside>
    )
}