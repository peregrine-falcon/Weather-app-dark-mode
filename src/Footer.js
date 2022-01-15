import React from 'react';
import { FaReact } from 'react-icons/fa';


function Footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom ">
        <div className="container-fluid " >
          <a className="navbar-brand mx-auto " href="/"><FaReact color="red" /> WeatherApp with Dark Mode <FaReact color="red" /> </a>
        </div>
      </nav>
    </div>
  )
}

export default Footer
