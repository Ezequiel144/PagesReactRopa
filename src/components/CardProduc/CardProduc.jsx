import React from "react";
import styleCardProduc from "./CardProduc.module.css";
/* import ImgRemera from "../../assets/remera.png" */
import { Link } from "react-router-dom";

export function CardProduc({key,id,title,descrip,img,price}){
    return (
        <article className={styleCardProduc.card}>
            <Link key={key} to={`/productos/${id}`} className={styleCardProduc.contentImg}>
                <img className={styleCardProduc.img} src={img} alt="imgProduc" />
            </Link>
            <section className={styleCardProduc.contentText}>
                <h2 className={styleCardProduc.title}>{title}</h2>
                <p className={styleCardProduc.descrip}>{descrip}</p>
                <h4 className={styleCardProduc.price}>{price}</h4>
            </section>
        </article>
    )
}