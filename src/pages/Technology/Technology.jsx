import React, { useState } from 'react';
import "./Technology.scss";
import NavBar from '../../components/NavBar/NavBar';
import technologiesData from "../../data/technologies.json"; 

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Fonction pour changer de technologie via les boutons
  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const currentTechnology = technologiesData[currentIndex]; 
  return (
    <div className='Technology'>
      <NavBar />
      <div className='title'>
        <h2><span>03</span> SPACE LAUNCH 101</h2>
      </div>
      <div className='TechnologyBot'>
        <div className='left'>
          <div className='container'>
            <div className='contLeft'>
              <span className={currentIndex === 0 ? 'selected' : ''} onClick={() => handleSelect(0)}>1</span>
              <span className={currentIndex === 1 ? 'selected' : ''} onClick={() => handleSelect(1)}>2</span>
              <span className={currentIndex === 2 ? 'selected' : ''} onClick={() => handleSelect(2)}>3</span>
            </div>
            <div className='contRight'>
              <h4>{currentTechnology.title}</h4>
              <h1>{currentTechnology.name}</h1>
              <p>{currentTechnology.description}</p>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={currentTechnology.image_path} alt={currentTechnology.name} />
        </div>
      </div>
    </div>
  );
}

export default Technology;
