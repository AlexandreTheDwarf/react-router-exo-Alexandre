import React, { useState } from "react";
import "./Crew.scss";
import { GoDotFill, GoDot } from "react-icons/go";
import NavBar from "../../components/NavBar/NavBar";
import crewData from "../../data/crew.json"; // 📥 Importation des données JSON

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0); // 🎯 État pour suivre le membre affiché

  // 🔄 Fonction pour changer d’équipier via les dots
  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const currentCrewMember = crewData[currentIndex]; // 🔥 Récupération du membre actuel

  return (
    <div className="Crew">
      {/* 🎥 Fond vidéo */}
      <div className="bg-video">
        <video autoPlay loop muted playsInline className="VideoBackground">
          <source src="/video/cover.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
      <div className="Overlay"></div>
      <NavBar />

      {/* 📌 Section affichage équipier */}
      <div className="CrewDivBottom">
        <div className="DivText">
          <div className="Title">
            <h3>
              <span>02</span> MEET YOUR CREW
            </h3>
          </div>
          <div className="Description">
            <h2>{currentCrewMember.title}</h2>
            <h1>{currentCrewMember.name}</h1>
            <p>{currentCrewMember.description}</p>
          </div>

          {/* ⚫ Dots interactifs */}
          <div className="menu">
            {crewData.map((_, index) => (
              <span key={index} onClick={() => handleSelect(index)}>
                {index === currentIndex ? <GoDotFill /> : <GoDot />}
              </span>
            ))}
          </div>
        </div>

        {/* 🖼️ Image dynamique */}
        <div className="DivImage">
          <img src={currentCrewMember.image_path} alt={currentCrewMember.name} />
        </div>
      </div>
    </div>
  );
}

export default Crew;
