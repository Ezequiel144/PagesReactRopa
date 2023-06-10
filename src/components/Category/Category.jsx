import React from "react";
import styleCategory from "./Category.module.css";
/* import { useParams } from "react-router-dom"; */
import { SelecCategory } from "../SelecCategory/SelecCategory.jsx";

const listCate = [
    {
        id:"1",
        name:"todo",
        tolink : "/category/todos"
    },
    {
        id:"2",
        name:"remeras",
        tolink : "/category/remeras"
    },
    {
        id:"3",
        name:"pantalones",
        tolink : "/category/pantalones"
    },
    {
        id:"4",
        name:"buzos",
        tolink : "/category/buzos"
    },
]

export function Category(){
    /* const {idcate} = useParams(); */
    /* console.log("hola id:" + idcate) */
    
    return(
        <section className={styleCategory.contentCate}>
            {
                listCate.map((item) => {
                    return(
                        <SelecCategory
                            key={item.id}
                            id = {item.id} 
                            name = {item.name}
                            categoID = {item.tolink}
                        />
                    )
                })
            }
            
            
            
            
        {/* <section className={styleCategory.contentSelector}>
            <select className={styleCategory.select} name="selector" id="">
                <option className={styleCategory.opc} value="todos"><Link to={'/productos/remeras'}>todos</Link></option>
                <option className={styleCategory.opc} value="remeras">remeras</option>
                <option className={styleCategory.opc} value="pantalones">Pantalones</option>
                <option className={styleCategory.opc} value="buzos">Buzos</option>
            </select>
        </section> */}
        </section>
    )
}
