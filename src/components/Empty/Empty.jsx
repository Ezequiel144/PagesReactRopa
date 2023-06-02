import React from "react";
import styleEmpty from "./Empty.module.css";

export function Empty(){
    return(
        <p className={styleEmpty.title}>No hay productos disponibles</p>
    )
}