import './styles.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../info';

import FlexContainer from '../FlexContainer';
import Celcius from '../Celcius';

function Favourite({ city }) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&alerts=yes`
        )
            .then((response) => response.json())
            .then(setData);
    }, [city]);

    if (!data) {
        return false;
    }

    return (
        <Link to={`/weather-app/${city}`}>
            <FlexContainer className='favourite'>
                <div className='favourite-info'>
                    <div className='favourite-city'>{city}</div>
                    <div className='favourite-weather'>
                        {data.current.condition.text}
                    </div>
                </div>
                <img
                    className='favourite-icn'
                    alt='favourite icon'
                    src={data.current.condition.icon.replace(
                        '64x64',
                        '128x128'
                    )}
                />
                <div className='favourite-temp'>
                    {Math.round(data.current.temp_c)}
                    <Celcius />
                </div>
            </FlexContainer>
        </Link>
    );
}

export default Favourite;
