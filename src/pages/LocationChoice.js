import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InfoLocation from "../components/InfoLocation";
import Collapse from "../components/Collapse";

const LocationChoice = () => {
  const [selectedArticle, setSelectedArticle] = useState();
  const { articleId } = useParams();
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`http://localhost:3004/articles/${articleId}`)
      .then((res) => {
        setSelectedArticle(res.data);
      })
      .catch((error) => {
        navigate("/error");
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [articleId]);

  return (
    <div>
      <div className="main-content-location">
        <Navigation />
        {selectedArticle && (
          <div>
            <Caroussel>
              {selectedArticle.pictures.map((picture, index) => (
                <img key={index} src={picture} alt="Photos du lieu" />
              ))}
            </Caroussel>
            <InfoLocation info={selectedArticle} />
            <div className="collapseLocationChoice">
              <Collapse
                article={selectedArticle}
                title="Description"
                text={selectedArticle.description}
              />

              <Collapse
                article={selectedArticle}
                title="Équipements"
                text={
                  <ul>
                    {selectedArticle.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LocationChoice;
