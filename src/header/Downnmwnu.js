
import index from "../index.module.css";
import UpHeader from "./UpHeader.module.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";

 



function Downnmwnu(props) {
  let s = props.lan;
  let menushow = props.open
  
 

  return(
    <>
    <div  className={menushow==1 ? `${UpHeader["navmenue"]}` :`${["nav"]}`}>
      <ul className={`${UpHeader["navlist"]}`}>
        <li>
          <button  className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`}>{s==1 ? "خانه" : "Home"}</button>
        
        </li>
        <li>
        {s==1 ? <a  className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`}>تیم ما </a>:<a href="/#ourTeam" className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`} > Barman Team</a>}
        </li>
        <li>
        {s==1 ? <a  className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`}>مقالات</a>:<a href="/#art" className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`} >Articele</a>}
        </li>
        <li>
        {s==1 ? <a  className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`}>ارتباط با ما</a> : <a href="/#connect" className={menushow==1 ?`${UpHeader["alinks"]}` :`${UpHeader["nav"]}`}> Connection </a>}
        </li>
      </ul>
    </div>
    </>
  );
}

export default Downnmwnu;
