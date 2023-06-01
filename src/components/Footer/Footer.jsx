import React from "react";
import styleFooter from "./Footer.module.css"
import { Link } from "react-router-dom";

export function Footer(){
    return (
        <footer className={styleFooter.footer}>
            <section className={styleFooter.sec1}>
                <p>Ecommers de ropa por Lote</p>
            </section>
            <section className={styleFooter.sec2}>
                <p>Paigna hecha por <Link>Ezequiel Garcia</Link></p>
            </section>
            <section className={styleFooter.sec3}>
                <div className={styleFooter.face}>
                    <img className={styleFooter.imgFace} src="" alt="face" />
                </div>
                <div className={styleFooter.insta}>
                    <img className={styleFooter.imgInsta} src="" alt="insta" />
                </div>
            </section>
        </footer>
    )
}