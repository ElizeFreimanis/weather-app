import './styles.css';
import { Link } from 'react-router-dom';

import useForecast from '../../hooks/useForecast';
import FlexContainer from '../FlexContainer';
import Celcius from '../Celcius';

function Favourite({ city }) {
    const data = useForecast(city);

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
