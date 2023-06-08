import React, { useEffect, useState } from "react";
import stylePageProduc from "./PagesProduc.module.css";
import { CardProduc } from "../../components/CardProduc/CardProduc.jsx"; 
import { useParams } from "react-router-dom";
import ImgRemera1 from "../../assets/remera.png"
import ImgPantalon1 from "../../assets/pantalon.png"
import ImgPantalonSkiny from "../../assets/pantalonSkinny.png";
import { Empty } from "../../components/Empty/Empty"

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

export function PagesProduc(){

    const {idcate} = useParams();
    console.log(idcate)
    const [value ,setValue] = useState(produc);

    useEffect(() => {
        
        if(idcate === "todos"){
            setValue(value);
            /* console.log(value); */
        
        }
        else if(idcate === 'pantalones'){
            /* console.log("no estas en categoria"); */
            setValue(value.filter(prod => prod.catego === idcate))
        }
        else if(idcate === 'remeras'){
            setValue(value.filter(prod => prod.catego === idcate))
            /* console.log(value) */
        }
        else if(idcate === 'buzos'){
            setValue(value.filter(prod => prod.catego === idcate))
            /* console.log(value) */
        }
    },[idcate])
    
    /* {console.log(value.length)} */
    return (
        <main className={stylePageProduc.main}>
            <section className={stylePageProduc.sec1}>
                {
                    /* console.log(value.length) */
                    value.length === 0 ? <Empty /> : console.log("")
                }
                {   
                    
                    value.map(p => {
                        return(<CardProduc
                                key = {p.id}
                                id = {p.id}
                                title = {p.title}
                                descrip = {p.descrip}
                                img = {p.img}
                                price = {p.price}
                            />)
                        })
                }
                
            </section>
        </main>
    )
}