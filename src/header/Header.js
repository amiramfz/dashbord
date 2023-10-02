import index from "../index.module.css";
import UpHeader from "./UpHeader.module.css";
import Downnmwnu from "./Downnmwnu";

import ax from "../image/logo.png";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Header(props) {
  let [menushow, setmenushow] = useState(0);

  let [s, sets] = useState(0);

  function shownav() {
    setmenushow(1);
  }
  function offnav() {
    setmenushow(0);
  }

  function buttlan() {
    if (s == 0) {
      sets(1);
    } else {
      sets(0);
    }
    props.mylang(s);
  }

  return (
    <>
      <div>
        <div
          onMouseEnter={shownav}
          onMouseLeave={offnav}
          className={`${UpHeader["conection"]} ${index["col-xs-offset-12"]} ${index["col-s-offset-12"]} ${index["col-md-offset-12"]} ${index["col-l-offset-12"]} ${index["col-xl-offset-12"]} ${index["col-xxl-offset-12"]}`}
        >
          <i className={`${UpHeader["enbutt"]}`} onClick={buttlan}>
            فارسی | English
          </i>

          <img src={ax} className={`${UpHeader["image"]}`} />

          <Downnmwnu open={menushow} lan={s} />
        </div>
      </div>
    </>
  );
}

export default Header;
