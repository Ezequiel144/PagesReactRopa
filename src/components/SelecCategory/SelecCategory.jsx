import React from "react";
import styleSelec from "./SelecCategory.module.css";
import { Link } from "react-router-dom";

export function SelecCategory(props){
    return(
        <Link key={props.id} to={props.categoID} className={styleSelec.Category}>
            <p className={styleSelec.cateName}>{props.name}</p>
        </Link>
    )
}