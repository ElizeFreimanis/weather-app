import { useState, useEffect } from 'react';

export default function useFavourites() {
    const [favourites, setFavourites] = useState(
        JSON.parse(localStorage.getItem('favourites')) || []
    );

    const addFavourite = (city) => {
        setFavourites([...favourites, city]);
    };

    const removeFavourite = (city) => {
        if (favourites.includes(city)) {
            setFavourites(favourites.filter((element) => city !== element));
        }
    };

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    return { favourites, addFavourite, removeFavourite };
}
