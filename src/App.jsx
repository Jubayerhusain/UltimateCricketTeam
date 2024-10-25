import "./App.css";
import Navber from "./AllComponants/header/Navber";
import Banner from "./AllComponants/header/Banner";

function App() {
  return (
    <>
      {/* header section  start*/}
      <header>
        {/* nav section  */}
        <Navber></Navber>
        {/* banner section */}
        <Banner></Banner>
      </header>
      {/* main section start */}
      <main></main>
      {/* footer sectiob start */}
      <footer></footer>
    </>
  );
}

export default App;
