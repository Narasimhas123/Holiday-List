import React, { Component} from "react";



function App() {
 

   let cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
      { name: "Banglore", country: "India" },
   
    
    ];
  

  
    return (
      <div id="main">
        <ol>
          {cityList.map((city, index) => {
        
              return <li key={"location" + parseInt(index) + 1}>{city.name}, country : {city.country}</li>;
          })}
        </ol>
      </div>
    );
  }


export default App;
