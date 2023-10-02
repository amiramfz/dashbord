import Header from "./header/Header";
import './App.css';
import { useState } from "react";
import Body from "./Body/Body";

function App() {
  let [s , sets ]= useState()

  function mylang(s) {
    sets(s)
  }

  console.log(s);
  return (
    <div className="App">
      <Header mylang={mylang}/>
      <div>
      <Body lan={s}/>
      </div>
   
    </div>
  );
}

export default App;
