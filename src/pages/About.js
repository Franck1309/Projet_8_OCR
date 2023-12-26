import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import axios from "axios";
import Footer from "../components/Footer";

const About = () => {

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
      {dataAbout.map((article , index) => (
        <Collapse key={index} title={article.title} text={article.text} />
      ))}
      <Footer />
    </div>
  );
};

export default About;
