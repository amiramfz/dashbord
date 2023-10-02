import { useState } from "react";
import body from "./body.module.css";
import index from "../index.module.css";

function Pardakht(props) {
  let data2 = [
    { date: "4/3/1400", numb: "1", faliyat: "tose" },
    { date: "4/3/1400", numb: "3", faliyat: "something" },
    { date: "4/3/1400", numb: "2", faliyat: "hellow" },
    { date: "4/3/1400", numb: "7", faliyat: "wow me" },
  ];
  let data = [
    { date: "4/3/1400", numb: "۱", faliyat: "بای" },
    { date: "4/3/1400", numb: "۳", faliyat: "سلیم" },
    { date: "4/3/1400", numb: "۲", faliyat: "خداشم" },
    { date: "4/3/1400", numb: "۷", faliyat: "امیرم" },
  ];
  let s = props.lan;

  return (
    <>
      <div className={body.MainBox}>
        <h2 className={s == 0 ? body.Titlefa : body.Titleen}>
          {s == 0 ? "پرداخت ها" :   "payment"}
        </h2>
        <div className={body.Boxes}>
          <p
            className={` ${body.faaliyat} ${index["col-xs-8"]} ${index["col-s-8"]} ${index["col-md-8"]} ${index["col-l-8"]} ${index["col-xl-8"]}  ${index["col-xxl-8"]}  `}
          >
            {s == 0 ? "نوع فعالیت" : "faaliyat ha"}
          </p>
          <p
            className={` ${body.faaliyat} ${index["col-xs-2"]} ${index["col-s-2"]} ${index["col-md-2"]} ${index["col-l-2"]} ${index["col-xl-2"]}  ${index["col-xxl-2"]}  `}
          >
            {s == 0 ? "تاریخ" : "date"}
          </p>
          <p
            className={` ${body.faaliyat} ${index["col-xs-2"]} ${index["col-s-2"]} ${index["col-md-2"]} ${index["col-l-2"]} ${index["col-xl-2"]}  ${index["col-xxl-2"]}  `}
          >
            {s == 0 ? "تعداد افراد" : "nombers"}
          </p>
        </div>
        {s == 0
          ? data.map((x) => {
              return <>
                <div className={body.Boxes}>
          <p
            className={` ${body.faaliyat} ${index["col-xs-8"]} ${index["col-s-8"]} ${index["col-md-8"]} ${index["col-l-8"]} ${index["col-xl-8"]}  ${index["col-xxl-8"]}  `}
          >
            {x.faliyat}
          </p>
          <p
            className={` ${body.faaliyat} ${index["col-xs-2"]} ${index["col-s-2"]} ${index["col-md-2"]} ${index["col-l-2"]} ${index["col-xl-2"]}  ${index["col-xxl-2"]}  `}
          >
            {x.date}
            
          </p>
          <p
            className={` ${body.faaliyat} ${index["col-xs-2"]} ${index["col-s-2"]} ${index["col-md-2"]} ${index["col-l-2"]} ${index["col-xl-2"]}  ${index["col-xxl-2"]}  `}
          >
            {x.numb}
            
          </p>
        </div>
              </>;
            })
          : data2.map((x) => {
              return <>
              <div className={body.Boxes}>
          <p
            className={` ${body.faaliyat} ${index["col-xs-8"]} ${index["col-s-8"]} ${index["col-md-8"]} ${index["col-l-8"]} ${index["col-xl-8"]}  ${index["col-xxl-8"]}  `}
          >
            {x.faliyat}
          </p>
          <p
            className={` ${body.faaliyat} ${index["col-xs-2"]} ${index["col-s-2"]} ${index["col-md-2"]} ${index["col-l-2"]} ${index["col-xl-2"]}  ${index["col-xxl-2"]}  `}
          >
            {x.date}
          </p>
          <p
            className={` ${body.faaliyat} ${index["col-xs-2"]} ${index["col-s-2"]} ${index["col-md-2"]} ${index["col-l-2"]} ${index["col-xl-2"]}  ${index["col-xxl-2"]}  `}
          >
            {x.numb}
          </p>
        </div>
              </>;
            })}
      </div>
    </>
  );
}

export default Pardakht;
