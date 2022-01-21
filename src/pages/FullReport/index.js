import './styles.css';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';

import useForecast from '../../hooks/useForecast';
import useFavourites from '../../hooks/useFavourites';
import FavouriteHeart from '../../components/FavouriteHeart';
import FlexContainer from '../../components/FlexContainer';

import DayDetail from '../../components/DayDetail';
import FullReportCard from '../../components/FullReportCard';

function FullReport() {
    const [day, setDay] = useState(0);

    const { city } = useParams();

    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const isFavourite = favourites.includes(city);

    const data = useForecast(city);

    if (!data) {
        return false;
    }

    const selectedDay = data.forecast.forecastday[day];

    return (
        <div>
            <FavouriteHeart
                addFavourite={addFavourite}
                isFavourite={isFavourite}
                removeFavourite={removeFavourite}
                city={city}
                className='heart-full-report'
            />
            <h1 className='report-title'>Forecast report</h1>
            <h2 className='report-city'>{data.location.name}</h2>

            <FlexContainer className='day-ctn'>
                <DayDetail
                    src={data.forecast.forecastday[0].day.condition.icon}
                    day='Today'
                    temp={data.current.temp_c}
                    onClick={() => setDay(0)}
                    active={day === 0}
                />
                <DayDetail
                    src={data.forecast.forecastday[1].day.condition.icon}
                    day={moment(data.forecast.forecastday[1].date).format(
                        'ddd'
                    )}
                    temp={data.forecast.forecastday[1].day.maxtemp_c}
                    onClick={() => setDay(1)}
                    active={day === 1}
                />
                <DayDetail
                    src={data.forecast.forecastday[2].day.condition.icon}
                    day={moment(data.forecast.forecastday[2].date).format(
                        'ddd'
                    )}
                    temp={data.forecast.forecastday[2].day.maxtemp_c}
                    onClick={() => setDay(2)}
                    active={day === 2}
                />
            </FlexContainer>
            <h2 className='report-date'>
                {moment(selectedDay.date).format('MMM D')}
            </h2>
            <FullReportCard
                src={selectedDay.day.condition.icon.replace('64x64', '128x128')}
                temp={
                    day === '00'
                        ? Math.round(data.current.temp_c).toString().charAt(0)
                        : Math.round(selectedDay.day.avgtemp_c).toString()
                }
                tempInfo={day === 1 || day === 2 ? '(avg temp)' : false}
                maxtemp={Math.round(selectedDay.day.maxtemp_c)}
                mintemp={Math.round(selectedDay.day.mintemp_c)}
                wind={Math.round(selectedDay.day.maxwind_kph)}
                humidity={selectedDay.day.avghumidity}
                condition={selectedDay.day.condition.text}
                sunUp={selectedDay.astro.sunrise.toLowerCase()}
                sunDown={selectedDay.astro.sunset.toLowerCase()}
                feelsLike={
                    day === 0 &&
                    `Feels like ${Math.round(data.current.feelslike_c)}`
                }
                hour={selectedDay.hour}
            />

            <Link to='/weather-app' className='click-txt forecast'>
                Back to homepage
            </Link>
        </div>
    );
}

export default FullReport;
