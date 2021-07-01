import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

import styles from './CountryInfo.module.css';

const CountryInfo = ()  => {

    const [countryDetails, setCountryDetails] = useState([]);

    const {name} = useParams();

    useEffect(()=> {

        const fetchData =  async () => {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
        const countryDetails = await response.data;
        setCountryDetails(countryDetails);
        console.log(countryDetails)
        }
        fetchData();
    },[name])

    return (
        <div className={styles.container}>
            <div className={styles.countryInfo}>
                <div className={styles.backBttn}>
                    <Link to="/" className={styles.backLink}>Back Home</Link>
                </div>
                {countryDetails.map((country) => {
                    const {numericCode, flag, name, nativeName, population, region, capital, currencies, languages} = country

                    return (
                        <div key={numericCode} className={styles.countryInfoDetails}>
                            <div className={styles.flag}>
                                <img src={flag} alt="Flag" />
                            </div>
                            <div className={styles.details}>
                                <h1>{name}</h1>
                                <h3>Native Name : <span>{nativeName}</span></h3>
                                <h3>Population : <span>{population}</span></h3>
                                <h3>Region : <span>{region}</span></h3>
                                <h3>Capital : <span>{capital}</span></h3>
                                <h3>Currencies : <span>{currencies[0].name}</span></h3>
                                <h3>Languages : <span>{languages[0].name}</span></h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CountryInfo;
