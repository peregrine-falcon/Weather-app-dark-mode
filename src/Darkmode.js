import React, { useEffect, useState } from 'react'

function Darkmode() {

   // Code for the Dark and light mode

   const [myStyle, setMyStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        backgroundColor: 'white',
        color: 'black'
      })
      setBtnText("Enable Dark Mode")
      document.title = "Light mode is now enabled"
    }
    else {
      setMyStyle({
        backgroundColor: 'black',
        color: 'white'
      })
      setBtnText("Enable Light Mode")
      document.title = "Dark mode is now enabled"
    }
  }

  // To GET THE DATA FROM THE API 

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=70e8bbd8e508df647bbdb21894c28653`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();

  }, [search])

  // END OF THE API CODE 

  return (

    <>

      {/* Code for the Search input */}
      <div
        className="container-fluid py-5 mt-5 h-100 "
        style={myStyle}
      >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">

            <div className="input-group flex-nowrap">
            <button type="button" class="btn btn-light" onClick={toggleStyle}>{btnText}</button>

              <input
                type="search"
                className="form-control"
                placeholder="Enter City Name..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(event) => { setSearch(event.target.value) }}
              />
            </div>
          </div>
        </div>
      </div>
      {!city ? (
       
         <section className="vh-100 py-0" style={myStyle} >
         <div className="container py-5 h-80">
         <div className="row d-flex justify-content-center align-items-center h-80">
         <div className="col-md-8 col-lg-6 col-xl-4" style={{ height : "50%"}}>
            <div
              className="card"
              style={{ color: "#4B515D", borderRadius: "35px" }}
            >
            <div className="card-body p-4">
            <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}>
                    {" "} NO DATA TO SHOW{" "}
                  </h6>
                  
                </div> </div> </div> </div> </div> </div> </section>
        
        ) : (

      

        < section className="vh-100 py-0" style={{ backgroundColor: "rgb(75, 81, 93)"  }} style={myStyle} >
      <div className="container py-5 h-80">
        <div className="row d-flex justify-content-center align-items-center h-80">
          <div className="col-md-8 col-lg-6 col-xl-4" style={{ height : "50%"}}>
            <div
              className="card"
              style={{ color: "#4B515D", borderRadius: "35px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex text-center">
                  <h4 className="flex-grow-1 ">{search}</h4>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}
                    {city.temp.toFixed(0)}<sup>o</sup>C{" "}
                  </h6>
                 
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                    <div>
                      <i
                        className="fas fa-wind fa-fw"
                        style={{ color: "#868B94" }}
                      ></i>{" "}
                      <span className="ms-1"> Max Temp - {city.temp_max.toFixed(1)} <sup>o</sup>C </span>
                    </div>
                    <div>
                      <i
                        className="fas fa-tint fa-fw"
                        style={{ color: "#868B94" }}
                      ></i>{" "}
                      <span className="ms-1"> Humidity - {city.humidity} % </span>
                    </div>
                    <div>
                      <i
                        className="fas fa-sun fa-fw"
                        style={{ color: "#868B94" }}
                      ></i>{" "}
                      <span className="ms-1"> Pressure - {city.pressure} hPa </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                      width="100px"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)}
    </>
  );
}

export default Darkmode;
