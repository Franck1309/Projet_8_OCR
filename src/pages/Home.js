import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import axios from "axios";
import data from "../assets/data.json";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner
        imageUrl="img/./paysage1.png"
        textUrl="Chez vous, partout et ailleurs"
      />
      <div className="boxCards">
        {data.articles.map((article) => (
        <Card
          cover={article.cover}
          title={article.title}
          id={article.id}
          key={article.id}
        />
      ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
