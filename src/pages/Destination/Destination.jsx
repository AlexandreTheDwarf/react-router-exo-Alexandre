import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import "./Destination.scss";
import data from '../../data/planet.json';

function Destination() {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL
  const destination = data.find((planet) => planet.id === parseInt(id)); // Trouver la destination

  if (!destination) {
    return <p>Destination not found</p>; // Gérer une erreur si l'ID ne correspond à rien
  }

  return (
    <div className='Destination'>
      <NavBar />
      <section className='DestinationBot'>
        <div className='Title'>
          <h1><span>01</span> PICK YOUR DESTINATION</h1>
        </div>
        <div className='Container'>
          <div className='left'>
            <img src={destination.image_path} alt={destination.name} />
          </div>
          <div className='right'>
            <div className='Nav'>
              <ul>
                {data.map((planet) => (
                  <li key={planet.id}>
                    <NavLink
                      to={`/destination/${planet.id}`}
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " selected" : "")
                      }
                    >
                      {planet.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='Title'>
              <h2>{destination.name}</h2>
            </div>
            <div className='Description'>
              <p>{destination.description}</p>
            </div>
            <div className='Travel'>
              <span>EST. TRAVEL TIME</span>
              <h3>{destination.time}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;
