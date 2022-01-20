import './styles.css';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import Celcius from '../Celcius';
import FlexContainer from '../FlexContainer';

function ReportInfo({
    temp,
    tempInfo,
    maxtemp,
    mintemp,
    condition,
    feelsLike,
}) {
    return (
        <div>
            <h1 className='full-report-card-temp'>
                {temp}
                {temp && <Celcius />}
            </h1>
            <div className='temp-info'>
                {tempInfo} {feelsLike}
                {feelsLike && <Celcius />}
            </div>
            <div>
                <FlexContainer>
                    <div className='maxmin-temp'>
                        <FiChevronUp />
                        {maxtemp}°
                    </div>
                    <div className='maxmin-temp'>
                        <FiChevronDown />
                        {mintemp}°
                    </div>
                </FlexContainer>
                <h3 className='report-condition'>
                    {condition.split(' ').slice(0, 2).join(' ')}
                </h3>
            </div>
        </div>
    );
}

export default ReportInfo;
