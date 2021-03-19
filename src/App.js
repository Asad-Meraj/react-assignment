import "./App.css"
import Axios from "axios"
import React, {useState} from "react"


function App() {
  
  const [data, setData] = useState ("")
  const getData = () =>{
  Axios.get("https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=58.4037694&lon=15.5407345").then (
    (response)=>{

      setData(response.data.properties.meta.updated_at);


    });
};
  if (data === "") {
    return (
      <div className="App">
        <main className="main"> Main window </main>

        <header className="App-header">
          <p>This is header</p>

        </header> 
        <button className={`btn`} onClick={getData}> Click Here to get Data   </button>    
      </div>
    ); 
    
  } else {
    return (

      <div className="App">
        <main className="main"> Main window </main>

        <header className="App-header">
          {data.replace(/[A-Z]/g, " ")}
        </header>   

        <button className={`btn`} onClick={getData}> Click Here to get Data   </button>
      </div>
    ); 

  }
  
}

export default App;
