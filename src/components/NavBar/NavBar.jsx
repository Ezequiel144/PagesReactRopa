import React from "react";
import styleNavBar from "./Navbar.module.css";
import { Link } from "react-router-dom";

const listLinkRuotes = [
    {   
        id: "0",
        name: "Inicio",
        link: "/"
    },
    {
        id: "1",
        name: "Productos",
        link: "/productos"
    },
    {
        id: "2",
        name: "Contactos",
        link: "#"
    },
    {
        id: "3",
        name: "Categoria",
        link: "/category"
    }
];

export function Navbar(){
    return(
        <header className={styleNavBar.header}>
            <h1 className={styleNavBar.logo}>CABALLEROS</h1>
            <nav className={styleNavBar.nav}>
                <ul className={styleNavBar.list}>
                    {
                        listLinkRuotes.map(elem => {
                            return <li><Link key={elem.id} to={elem.link} className={styleNavBar.linkRute}>{elem.name}</Link></li>
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}