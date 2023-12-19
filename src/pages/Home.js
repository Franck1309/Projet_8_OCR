import React from "react";
import Navigation from "../components/Navigation";
import Location from "../components/Location";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Accueil</h1>
      <ul>
        <li>
          <Location />
        </li>
      </ul>
    </div>
  );
};

export default Home;
