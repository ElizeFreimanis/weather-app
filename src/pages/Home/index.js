import './styles.css';
import { useState, useEffect } from 'react';
import moment from 'moment';

import useFavourites from '../../hooks/useFavourites';
import useForecast from '../../hooks/useForecast';

import SearchForm from '../../components/SearchForm';
import WeatherCard from '../../components/WeatherCard';
import Favourite from '../../components/Favourite';

function Home() {
    const [search, setSearch] = useState('');
    const [q, setQ] = useState();

    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const data = useForecast(q);

    useEffect(() => {
        // shows city of current position if location is fetched
        navigator.geolocation.getCurrentPosition((position) => {
            setQ(`${position.coords.latitude},${position.coords.longitude}`);
        });
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQ(search);
        setSearch('');
    };

    return (
        <div className='Home'>
            <SearchForm
                onSubmit={handleSubmit}
                value={search}
                onChange={handleChange}
            />
            {data &&
                (data.location ? (
                    <WeatherCard
                        city={data.location.name}
                        country={data.location.country}
                        date={moment(data.location.localtime).format('MMMM D')}
                        currentWeather={data.current.condition.text}
                        weatherIcon={data.current.condition.icon.replace(
                            '64x64',
                            '128x128'
                        )}
                        detailTemp={data.current.temp_c}
                        detailWind={data.current.wind_kph}
                        detailHumidity={data.current.humidity}
                        addFavourite={addFavourite}
                        isFavourite={favourites.includes(data.location.name)}
                        removeFavourite={removeFavourite}
                    />
                ) : (
                    <h1 className='not-found'>Location not found</h1>
                ))}
            {!q && favourites.length === 0 && (
                <h1 className='not-found'>Search for location</h1>
            )}
            {favourites.map((city) => (
                <Favourite key={city} city={city} />
            ))}
        </div>
    );
}

export default Home;
