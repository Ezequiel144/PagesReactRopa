import React, { useEffect, useState } from "react";
import stylePageProduc from "./PagesProduc.module.css";
import { CardProduc } from "../../components/CardProduc/CardProduc.jsx"; 
import { useParams } from "react-router-dom";

const produc = [
    {
        id: "1",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "2",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "3",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "4",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "5",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "6",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "7",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "8",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "9",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    },
    {
        id: "10",
        title: "remera oversize",
        descrip: "lorem lore jasd ifns jdsojdfsdf hjd d djsdofh",
        catego: "remeras",
        img: "",
        price: "220"
    }
];

export function PagesProduc(){

    const {idcate} = useParams();
    const [value ,setValue] = useState(produc);

    useEffect(() => {
        if(idcate){
            /* console.log("estas en " + idcate); */
            if(!idcate){
                setValue(value);
            }
        }else{
            /* console.log("no estas en categoria"); */

        }
    },[idcate])

    return (
        <main className={stylePageProduc.main}>
            
            <section className={stylePageProduc.sec1}>
                <CardProduc />
            </section>
        </main>
    )
}