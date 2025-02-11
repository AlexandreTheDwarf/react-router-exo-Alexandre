import React from 'react';
import "./Crew.scss";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
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
      <div class="Overlay"></div>
      <NavBar />
      <div className='CrewDivBottom'>
        <div className='DivText'>
            <div className='Title'> 
                <h3><span>02</span> MEET YOUR CREW</h3>
            </div>
            <div className='Description'>
                <h2>COMMANDER</h2>
                <h1>DOUGLAS HURLEY</h1>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div className='menu'>
                <GoDot />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
            </div>
        </div>
        <div className='DivImage'>
                <img src="/img/guy.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Crew;
