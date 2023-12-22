import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import axios from "axios";

const About = () => {
  //  DATA POUR LE COLLAPSE

  const [dataAbout, setDataAbout] = useState([]);
  const getDataAbout = () => {
    axios
      .get("http://localhost:3004/aboutData")
      .then((res) => setDataAbout(res.data))
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getDataAbout();
  }, []);

  return (
    <div>
      <Navigation />
      <Banner />
      {dataAbout.map((article) => (
        <Collapse key={article.title} article={article} />
      ))}
    </div>
  );
};

export default About;
