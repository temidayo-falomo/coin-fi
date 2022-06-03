import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MainContainer from "./components/mainContainer/MainContainer";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <MainContainer/>
      <Footer />
    </div>
  );
}

export default App;
