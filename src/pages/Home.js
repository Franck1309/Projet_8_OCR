import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <ul>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  );
};

export default Home;
