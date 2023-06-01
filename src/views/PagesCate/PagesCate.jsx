import React from "react";
import stylePagesCate from "./PagesCate.module.css";
import { Category } from "../../components/Category/Category";

export function PagesCate(){
    return(
        <main className={stylePagesCate.main}>
            <Category />
        </main>
    )
}