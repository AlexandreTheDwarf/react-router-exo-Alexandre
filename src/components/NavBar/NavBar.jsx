import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import "./NavBar.scss"

function NavBar() {
  return (
    <nav className='NavBar'>
      <div className='NavIcon'>
        <svg width="75" height="75" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="white" stroke="black" stroke-width="2" />
          <path d="M50 20 Q55 50 80 50 Q55 50 50 80 Q45 50 20 50 Q45 50 50 20 Z" fill="black" />
        </svg>
      </div>
      <div className='Navline'>
        <hr />
      </div>
      <div className='NavLinkDiv'>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " selected" : "")
              }
            >
              00 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination/1"
              className={({ isActive }) =>
                "nav-link" + (isActive || location.pathname.startsWith("/destination/") ? " selected" : "")
              }
            >
              01 DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " selected" : "")
              }
            >
              02 CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " selected" : "")
              }
            >
              03 TECHNOLOGY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invitation"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " selected" : "")
              }
            >
              04 INVITATION
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar