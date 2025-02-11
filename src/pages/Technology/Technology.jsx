import React from 'react'
import "./Technology.scss"
import NavBar from '../../components/NavBar/NavBar'

function Technology() {
  return (
    <div className='Technology'>
        <NavBar/>
        <div className='title'>
          <h2><span>03</span> SPACE LAUNCH 101</h2>
        </div>
        <div className='TechnologyBot'>
          <div className='left'>
              <div className='container'>
                <div className='contLeft'>
                  <span className='selected'>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <div className='contRight'>
                    <h4>THE TERMINOLOGY ...</h4>
                    <h1>LAUNCH VEHICULE</h1>
                    <p>Le vaisseau de transport Helldivers, un hybride entre avion et hélicoptère, est conçu pour des missions de déploiement rapide. Équipé de technologies avancées, il assure une insertion précise et sécurisée des troupes. Sa conception robuste et ses capacités de vol stationnaire en font un atout inestimable sur le champ de bataille. Doté de systèmes de défense intégrés.</p>
                </div>
              </div>
          </div>
          <div className='right'>
              <img src="/img/ship.jpg" alt="" />
          </div>
        </div>
      </div>
  )
}

export default Technology