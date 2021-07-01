import React, {useState, useEffect} from "react";
import axios from "axios";

import CardItem from "../CardItem/CardItem";


const MainContainer = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const BASE_URL = "https://restcountries.eu/rest/v2/all";

    const fetchData = async() => {
        setLoading(true);
        const response = await axios.get(BASE_URL);

        setCountries(response.data);
        setLoading(false);
        console.log(response.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(loading) {
        return <div>Loading ...</div>
    }

    return(
            <div>
                <CardItem countries={countries} /> 
            </div>
    )
};

export default MainContainer;