import React from "react";
import stylePagesDetails from "./PagesDetails.module.css";
import { Details } from "../../components/Details/Details";
import { useParams } from "react-router-dom";

export function PagesDetails(){

    const {idprod,idcate} = useParams();
    console.log(idprod,idcate); /*los saca de path={/:idprod}*/

    

    return(
        <main className={stylePagesDetails.main}>
            <section className={stylePagesDetails.sec1}>
                <Details />
                <p>aca va el boton de compra</p>
            </section>
        </main>
    )
}