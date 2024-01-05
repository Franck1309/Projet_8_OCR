import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner imageUrl="img/./paysage1.png" textUrl="Chez vous, partout et ailleurs"/>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
