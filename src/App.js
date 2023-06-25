import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="spaceApp" />
      <Footer />
    </div>
  );
};

export default App;
