import React from "react";
import stylePageOne from "./PagesOne.module.css";
import { TitleMain } from "../../components/TitleMain/TitleMain.jsx";
import { CardImg } from "../../components/CardImg/CardImg.jsx";
import ropaDos from "../../assets/ropaDos.jpg";
import ropaUno from "../../assets/ropaUno.jpg";
import ropaTres from "../../assets/ropaTres.jpg";

const listImg = [
    {
        id : "1",
        img : ropaUno,
        name : "Ropa 1"
    },
    {
        id : "2",
        img : ropaDos,
        name : "Ropa 2"
    },
    {
        id : "3",
        img : ropaTres,
        name : "Ropa 3"
    }
]


/* function ItemCardImg(list){
    
    list.map( elem => {
        return (
            <CardImg 
                id = {elem.id}
                img = {elem.img}
                name = {elem.name}
            />
        )
    })
    
} */

export function PagesOne(){
    return(
        <main className={stylePageOne.main}>
            <section className={stylePageOne.sec1}>
                <TitleMain />
            </section>
            <section className={stylePageOne.sec2}>
                {/* {ItemCardImg(listImg)} */}
                {
                    listImg.map( elem => {
                        return (
                            <CardImg 
                                id = {elem.id}
                                img = {elem.img}
                                name = {elem.name}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}