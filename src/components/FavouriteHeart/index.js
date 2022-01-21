import { FaRegHeart, FaHeart } from 'react-icons/fa';

function FavouriteHeart({
    city,
    addFavourite,
    isFavourite,
    removeFavourite,
    className,
}) {
    return (
        <div>
            {!isFavourite && (
                <FaRegHeart
                    className={className}
                    onClick={() => addFavourite(city)}
                />
            )}
            {isFavourite && (
                <FaHeart
                    className={className}
                    onClick={() => removeFavourite(city)}
                />
            )}
        </div>
    );
}

export default FavouriteHeart;
