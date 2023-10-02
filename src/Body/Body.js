import body from "./body.module.css";
import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import Dashbord from "./Dashbord";
import Faliyat from "./Faliyat";
import Pardakht from "./Pardakht";

function Body(props) {
  let s = props.lan;
  let [o, seto] = useState(1);
  let [b , setb] = useState(0)

  function button() {
    if (o==1) {
      seto(0);
    } else {
      seto(1);
    }
  }


    function bodyswich1() {
        setb(0)
    }
    function bodyswich2() {
        setb(1)
        
    }
    function bodyswich3() {
        setb(2)
        
    }


    

  return (
    <>
      <div className={body.BigBox}>
        <div className={o==0 ? body.Right : body.right}>
          <button onMouseDown={button} className={o==0 ? body.RightButt : body.RightButt2 }>
            {o == 0 ? <CgMenuMotion /> : <BiMenuAltRight />}</button>
            <div className={o==0 ? body.DashBox : body.off}>
            <h3 onClick={bodyswich1} className={o==0 ? body.dash : body.off}>{s==0 ? "داشبورد" : "dashbord"  }</h3>
            <h3 onClick={bodyswich2} className={o==0 ? body.dash : body.off}>{s==0 ? "فعالیت ها" :  "faaliyat"}</h3>
            <h3 onClick={bodyswich3} className={o==0 ? body.dash : body.off}>{s==0 ? "پرداخت ها" :  "pardakht"}</h3>
            </div>
          
        </div>

        <div className={body.SBox}>
           {b==0 ? <Dashbord lan={s}/> : ""}
           { b==1 ? <Faliyat lan={s}/> : ""}
         { b==2 ? <Pardakht lan={s}/> : "" } 
            
            

        </div>
      </div>
    </>
  );
}

export default Body;
