import { useState, useEffect } from 'react';
import { API_KEY } from '../info';

export default function useForecast(q) {
    const [data, setData] = useState();

    useEffect(() => {
        if (q) {
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${q}&days=3&alerts=yes`
            )
                .then((response) => response.json())
                .then(setData);
        }
    }, [q]);

    return data;
}
