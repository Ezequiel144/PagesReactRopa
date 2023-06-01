import React from "react";
import styleCardProduc from "./CardProduc.module.css";
import ImgRemera from "../../assets/remera.png"
import { Link } from "react-router-dom";

export function CardProduc(){
    return (
        <article className={styleCardProduc.card}>
            <Link to={'/productos/1'} className={styleCardProduc.contentImg}>
                <img className={styleCardProduc.img} src={ImgRemera} alt="imgProduc" />
            </Link>
            <section className={styleCardProduc.contentText}>
                <h2 className={styleCardProduc.title}>title</h2>
                <p className={styleCardProduc.descrip}>adajus ahadb adiad ad s</p>
                <h4 className={styleCardProduc.price}>300</h4>
            </section>
        </article>
    )
}