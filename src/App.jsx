import "./App.css";
import Navber from './AllComponants/header/Navber';

function App() {
  return (
    <>
      {/* header section  start*/}
      <header>
        {/* nav section  */}
        <Navber></Navber>
        {/* banner section */}
        
      </header>
      {/* main section start */}
      <main>
        <h1 className="text-center text-5xl font-bold">Welcome to my world</h1>
        <h1 className="text-center text-5xl font-bold">Welcome to my world</h1>
        <h1 className="text-center text-5xl font-bold">Welcome to my world</h1>
      </main>
      {/* footer sectiob start */}
      <footer></footer>
    </>
  );
}

export default App;