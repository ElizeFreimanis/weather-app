import './styles.css';

import { Link } from 'react-router-dom';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

import Detail from '../Detail';
import FlexContainer from '../FlexContainer';

function WeatherCard({
    city,
    country,
    date,
    currentWeather,
    weatherIcon,
    detailTemp,
    detailWind,
    detailHumidity,
    addFavourite,
    isFavourite,
    removeFavourite,
}) {
    return (
        <div className='weather-card'>
            {!isFavourite && (
                <FaRegHeart
                    className='heart'
                    onClick={() => addFavourite(city)}
                />
            )}
            {isFavourite && (
                <FaHeart
                    className='heart'
                    onClick={() => removeFavourite(city)}
                />
            )}
            <Link to={`/${city}`}>
                <h1
                    className='city'
                    style={{ fontSize: city.length > 10 ? '0.95rem' : false }}
                >
                    {city}
                </h1>
                <h2 className='country'>{country}</h2>
                <h3 className='date'>{date}</h3>
                <img
                    className='homepage-icn'
                    src={weatherIcon}
                    alt='weather-icon'
                />
                <h4 className='current-weather'>{currentWeather}</h4>
                <FlexContainer className='detail-ctn'>
                    <Detail label='Temp' value={detailTemp} unit='°' />
                    <Detail label='Humidity' value={detailHumidity} unit='%' />
                    <Detail label='Wind' value={detailWind} unit='km/h' />
                </FlexContainer>
                <div className='click-txt'>View full report</div>
            </Link>
        </div>
    );
}

export default WeatherCard;
