import React, { useEffect, useState } from 'react'
import "./home.scss"
import {GoSearch} from "react-icons/go";
import {BsChevronDown} from "react-icons/bs";
import India from "../india.png";
import { Link } from 'react-router-dom';

// const countries = [
//     {
//         name:"India",
//         img: India,
//         pop: 100000,
//         cap: "New delhi",
//         region: "Asia"
//     }]

export const Home = () => {

    const [countries,setCountries] = useState([]);
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [name,setName] = useState("");
    const [region,setRegion] = useState("");

const getAllCountries = async ()=>{

    try {
       const res = await fetch("https://restcountries.com/v3.1/all");
       if(!res.ok) throw new Error("Something went wrong!");
       const data = await res.json();

       setCountries(data);
       setError("");
       setIsLoading(false); 
    } catch (error) {
        setIsLoading(false);
        setError(error.message);
    }
}

const getCountryByName = async()=>{
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if(!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
 
        setCountries(data);
        setError("");
        setIsLoading(false); 
     } catch (error) {
         setIsLoading(false);
         setError(error.message);
     }
}

const getCountryByNameHandler = (e)=>{

    e.preventDefault();
    getCountryByName();
}

const filterByRegion = async ()=>{
    try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        if(!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
 
        setCountries(data);
        setError("");
        setIsLoading(false); 
     } catch (error) {
         setIsLoading(false);
         setError(error.message);
     }
}

const filterByRegionHandler = (value)=>{
         setRegion(value);
         filterByRegion(value);
}
    useEffect(()=>{
        getAllCountries();
    },[])

  return (
    <div className='home'>
        <div className="menu">
            <div className="input">
                <form onSubmit={getCountryByNameHandler}>
                <GoSearch className='input-icon'/>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Search for a country'/>
                </form>
            </div>
            <div className="dropdown">
                <button>{region === "" ? (<>Filter by Region <BsChevronDown/> </>): region}</button>
               <selection className="items">
                <option onClick={()=>filterByRegionHandler("Asia")}>Asia</option>
                <option onClick={()=>filterByRegionHandler("Africa")}>Africa</option>
                <option onClick={()=>filterByRegionHandler("Europe")}>Europe</option>
                <option onClick={()=>filterByRegionHandler("America")}>America</option>
                <option onClick={()=>filterByRegionHandler("Oceania")}>Oceania</option>
               </selection>
            </div>
        </div>

        <div className="country-list">
            {isLoading && !error && <h4>Loading....</h4>}
            {error && !isLoading && <h4>{error}</h4>}
           {
            countries?.map((item,index)=>(
                <Link to={`/details/${item.ccn3}`}>
                <div key={index} className="card">
                <img src={item.flags.svg} alt="india" />
                <div className="bottom">
                <h3>{item.name.common}</h3>
                <p>Population : {item.population}</p>
                <p>Region : {item.region}</p>
                <p>Capital : {item.capital}</p>
                </div>
                </div>
                </Link>
            ))
           }
        </div>
    </div>
  )
}
