import './styles.css';
import { useEffect, useRef } from 'react';
import Celcius from '../Celcius';

function HourlyReport({ hourlyTemp, hour, onClick, active }) {
    const ref = useRef();

    // make the current hour central in hourly report
    useEffect(() => {
        if (active) {
            ref.current.scrollIntoView({ inline: 'center', block: 'nearest' });
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div
            ref={ref}
            className={`hourly-report ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className='hourly-header'>{hour}</div>
            <div className='hourly-temp'>
                {hourlyTemp}
                <Celcius />
            </div>
        </div>
    );
}

export default HourlyReport;
