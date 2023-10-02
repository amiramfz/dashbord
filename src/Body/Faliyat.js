import { useState } from "react";
import body from "./body.module.css";

function Faliyat(props) {
  let s = props.lan;

  return (
    <>
      <div className={body.MainBox}>
        <h2 className={s == 0 ? body.Titlefa : body.Titleen}>
          {s == 0 ? " فعالیت ها" : "Activitis"}
        </h2>
        <div className={body.Faliyat}>
          
        </div>
      </div>
    </>
  );
}

export default Faliyat;
