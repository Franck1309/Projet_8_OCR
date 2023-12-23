import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InfoLocation from "../components/InfoLocation";

const LocationChoice = () => {
  const [selectedArticle, setSelectedArticle] = useState();
  const { articleId } = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:3004/articles/${articleId}`)
      .then((res) => {
        setSelectedArticle(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [articleId]);

  return (
    <div>
      <Navigation />

      {selectedArticle && (
        <>
          <Caroussel>
            {selectedArticle.pictures.map((picture, index) => (
              <img
                key={`${selectedArticle.id}-${index}`}
                src={picture}
                alt={selectedArticle.title}
              />
            ))}
          </Caroussel>

          <InfoLocation info={selectedArticle} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default LocationChoice;
