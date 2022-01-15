import React from 'react';
import { FaReact } from 'react-icons/fa';


function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container-fluid " >
          <a className="navbar-brand mx-auto " href="/"><FaReact color="#11e5fa"/> WeatherApp with Dark Mode <FaReact color="#11e5fa"/> </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav
