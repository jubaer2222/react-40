import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';





const countries = () => {

    const [countries,setCountries] = useState([]);

   useEffect(()=>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   },[])
    return (
        <div>
          <h3>Countries :{countries.length}</h3>  

          <div>
            <h5>Visited Countries</h5>
            <ul>
              
            </ul>
          </div>
        <div className="country-container">
        {
              countries.map(country =><Country key={country.cca3}
                 country={country}></Country>)


          }

        </div>
        </div>
    );
};

export default countries;