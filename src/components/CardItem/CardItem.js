
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from "./CardItem.module.css";

const CardItem = ({countries})  => {

    const [searchCountry, setSearchCountry] = useState("");

    const filteredCountries = countries.filter((value) => {
        return value.name.toLowerCase().includes(searchCountry.toLowerCase())
    })
    return (
        <div className={styles.container}>
            <div className={styles.inputBox}>
                <label>Search Country :</label>
                <input 
                type="text"
                onChange={e => setSearchCountry(e.target.value)}
                />
            </div>
            {filteredCountries.map((value, index) => (
               <div 
               key={index} 
               className={styles.card}
               >
                   <h1>{value.name}</h1>
                   <img src={value.flag}  alt="Flag" /> 
                   <h2>Country Capital : {value.capital}</h2>
                   <p>Currency Name : {value.currencies[0].name}</p>
                   <p>Currency Code : {value.currencies[0].code}</p>
                   <p>Currency Symbol : {value.currencies[0].symbol}</p>
                   <p>Region : {value.region}</p>
                   <Link to={`/maincontainer/${value.name}`} className={styles.linkBttn}>Learn more</Link>
               </div>
           ))}
        </div>
    )
}

export default CardItem;
