import { useState, useEffect } from 'react';

import './styles.css';

import WeatherDetails from '../WeatherDetails';
import FlexContainer from '../FlexContainer';
import ReportInfo from '../ReportInfo';
import HourlyReport from '../HourlyReport';
import moment from 'moment';
import HourlyInfo from '../HourlyInfo';

function FullReportCard({
    src,
    temp,
    tempInfo,
    maxtemp,
    mintemp,
    wind,
    humidity,
    condition,
    sunUp,
    sunDown,
    feelsLike,
    hours,
    initialHour,
}) {
    const [selectedHour, setSelectedHour] = useState();

    useEffect(() => {
        setSelectedHour(hours[initialHour]);
    }, [hours, initialHour]);

    return (
        <div className='full-report-card'>
            <FlexContainer className='report-ctn'>
                <img alt='weather icon' className='report-icn' src={src} />
                <ReportInfo
                    temp={temp}
                    tempInfo={tempInfo}
                    maxtemp={maxtemp}
                    mintemp={mintemp}
                    condition={condition}
                    feelsLike={feelsLike}
                />
            </FlexContainer>
            <WeatherDetails
                sunUp={sunUp}
                sunDown={sunDown}
                maxtemp={maxtemp}
                mintemp={mintemp}
                wind={wind}
                humidity={humidity}
            />
            <h2 className='hourly-title'>Hourly reports</h2>
            {selectedHour && (
                <div className='hourly-ctn'>
                    {hours.map((object) => (
                        <HourlyReport
                            key={object.time}
                            hourlyTemp={Math.round(object.temp_c)}
                            hour={moment(object.time).format('HH')}
                            onClick={() => setSelectedHour(object)}
                            active={selectedHour === object}
                            hours={hours}
                        />
                    ))}
                </div>
            )}
            {selectedHour && (
                <FlexContainer className='hourly-info-ctn'>
                    <HourlyInfo
                        title='Feels like'
                        text={`${Math.round(selectedHour.feelslike_c)}°C`}
                    />
                    <HourlyInfo
                        title='Wind'
                        text={`${Math.round(selectedHour.wind_kph)}km/h`}
                    />
                    <HourlyInfo
                        title='Humidity'
                        text={`${selectedHour.humidity}%`}
                    />
                    <HourlyInfo
                        title='Precipitation'
                        text={`${Math.round(selectedHour.precip_mm)}mm`}
                    />
                </FlexContainer>
            )}
        </div>
    );
}

export default FullReportCard;
