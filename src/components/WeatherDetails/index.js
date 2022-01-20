import './styles.css';
import { FiDroplet, FiWind, FiSunrise, FiSunset } from 'react-icons/fi';
import FlexContainer from '../FlexContainer';

function WeatherDetails({ wind, humidity, sunUp, sunDown }) {
    return (
        <div className='weather-details'>
            <FlexContainer className='weather-details-ctn'>
                <div className='weather-detail'>
                    <FiWind className='weather-detail-icn' />
                    {`${wind}km/h`}
                </div>
                <div className='weather-detail'>
                    <FiDroplet className='weather-detail-icn' />
                    {`${humidity}%`}
                </div>
                <div className='weather-detail sun'>
                    <FiSunrise className='weather-detail-icn' />
                    {sunUp}
                </div>
                <div className='weather-detail sun'>
                    <FiSunset className='weather-detail-icn' />
                    {sunDown}
                </div>
            </FlexContainer>
        </div>
    );
}

export default WeatherDetails;
