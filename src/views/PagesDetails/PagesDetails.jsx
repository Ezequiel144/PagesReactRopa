import React, { useContext, useEffect, useState } from "react";
import stylePagesDetails from "./PagesDetails.module.css";
import { Details } from "../../components/Details/Details";
import { useParams } from "react-router-dom";
import ImgRemera1 from "../../assets/remera.png"
import ImgPantalon1 from "../../assets/pantalon.png"
import ImgPantalonSkiny from "../../assets/pantalonSkinny.png";
import { context } from "../../components/GenericContext/GenericContext";


export function PagesDetails(){

    const { stateCard, addToCart } = useContext(context)
    /* console.log("tiene: ",stateCard) */
    const {idprod} = useParams();
    /* console.log(idprod); */ /*los saca de path={/:idprod}*/

    const produc = [
        {
            id: "1",
            title: "remera oversize",
            descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
            catego: "remeras",
            img: ImgRemera1,
            price: "220"
        },
        {
            id: "2",
            title: "pantalon skinny",
            descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
            catego: "pantalones",
            img: ImgPantalonSkiny,
            price: "320"
        },
        {
            id: "3",
            title: "pantalon SlimFit",
            descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
            catego: "pantalones",
            img: ImgPantalon1,
            price: "420"
        }
    ];

    const [pro,setPro] = useState(produc);

    useEffect(() => {
        setPro(pro.find(p => p.id === idprod))
    },[idprod])


    return(
        <main className={stylePagesDetails.main}>
            <section className={stylePagesDetails.sec1}>
                <Details
                    id={pro.id} 
                    title={pro.title}
                    img={pro.img}
                    descrip={pro.descrip}
                    price={pro.price}
                    addToCart = {addToCart}
                />{/* 
                <button onClick={()=>{
                    console.log(pro)
                    addToCart(pro)
                    
                }}>click</button> */}
                
            </section>
        </main>
    )
}