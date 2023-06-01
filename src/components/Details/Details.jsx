import React from "react";
import styleDetails from "./Details.module.css";
import ImgRemera from "../../assets/remera.png";

export function Details(){
    return(
        <aside className={styleDetails.contentDetails}>
            <div className={styleDetails.imgDetails}>
                <img className={styleDetails.img} src={ImgRemera} alt={ImgRemera} />
            </div>
            <div className={styleDetails.contentText}>
                <p className={styleDetails.descrip}>asoidaoid asdnaosid asoidjaoisd aoisdasdoiasd aisodaosd asdoijaosd</p>
            </div>
            
        </aside>
    )
}