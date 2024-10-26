/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Navber from "./AllComponants/header/Navber";
import Banner from "./AllComponants/header/Banner";
import AllPlayers from "./AllComponants/allPlayers/AllPlayers";
import Footer from "./AllComponants/FooterContainar/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });

  const handleCartStatus = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  const [freeCradit, setFreeCadit] = useState(0);
  const addCoinToFreeCadit = (craditincrise) => {
    setFreeCadit(freeCradit => freeCradit + craditincrise);
  };
  console.log(freeCradit);
  return (
    <>
      {/* header section  start */}
      <header>
        {/* nav section  */}
        <Navber freeCradit={freeCradit}></Navber>
        {/* banner section */}
        <Banner addCoinToFreeCadit={addCoinToFreeCadit}></Banner>
      </header>
      {/* main section start */}
      <main>
        <div className="w-11/12 mx-auto">
          <AllPlayers
            isActive={isActive}
            freeCradit={freeCradit}
            setFreeCadit={setFreeCadit}
            handleCartStatus={handleCartStatus}
          ></AllPlayers>
        </div>
      </main>
      {/* footer section start */}
      <footer>
        <div className="bottom-0">
          <Footer></Footer>
        </div>
      </footer>
    </>
  );
}

export default App;
