import React, { useEffect, useState } from 'react'
import "./details-page.scss"
import { Link, useParams } from 'react-router-dom'
import {BsArrowLeftShort} from "react-icons/bs";



export const DetailsPage = () => {

const params = useParams();
const [country,setCountry] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState("");


const fetchCountry = async()=>{

  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);

    if(!res.ok) throw new Error("Something went wrong");

    const data = await res.json();
    setCountry(data);
    setLoading(false);
    setError("");

  } catch (error) {
    setError(error.message);
    setLoading(false);
  }
}

useEffect(()=>{
  fetchCountry();
},[params.id])

  return (
    <div className='container'>
        <Link to={"/"}><button><BsArrowLeftShort/> Back</button></Link>
       {loading && !error && <h3>Loading....</h3>}
       {error && !loading && <h3>{error}</h3>}
       {
        country.map((item,index)=>(
          <div key={index} className="country">
                  <div className="flag">
                    <img src={item.flags.svg} alt={item.name.common} />
                    <p>{item.flags.alt}</p>
                  </div>
                  
                  <div className="details">
                      <h2>{item.name.common}</h2>
                      <div className='text'>
                             <div className="text-1">
                             <p>Native name : {Object.values(item.name.nativeName).map(nam => nam.official).join(",")}</p>
                             <p>Population : {item.population}</p>
                             <p>Region : {item.region}</p>
                             <p>Subregion : {item.subregion}</p>
                             <p>Capital : {item.capital}</p>
                             </div>
                            <div className="text-2">
                            <p>Top level domain : {item.topLevelDomain ? item.topLevelDomain.join(",") : "N/A"}</p>
                             <p>Currencies : {Object.values(item.currencies).map(cur => cur.name).join(",")}</p>
                             <p>Languages : {Object.values(item.languages).join(",")}</p>
                            </div>
                      </div>
                      <div className="border">
                            <h4>Border Countries :</h4>
                           <div>
                           {
                            
                            item.borders?.map((country,i)=>(
                              <p key={i}>{country}</p>
                            ))
                        
                            }
                           </div>
                       </div>
                       
          </div>
          
        </div>
        ))
       }

       
    </div>
  )
}
