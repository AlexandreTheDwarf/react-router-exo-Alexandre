import React from 'react';
import "./Crew.scss";
import NavBar from '../../components/NavBar/NavBar';

function Crew() {
  return (
    <div className='Crew'>
      <div className='bg-video'>
        <video autoPlay loop muted playsInline className="VideoBackground">
          <source src="/video/cover.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
      <NavBar />
    </div>
  );
}

export default Crew;
