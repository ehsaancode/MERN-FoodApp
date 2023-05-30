import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carausal from "../components/Carausal";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carausal />
      </div>
      <div>
        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
