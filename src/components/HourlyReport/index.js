import './styles.css';
import { useEffect, useRef } from 'react';
import Celcius from '../Celcius';

let hasScrolled = false;

function HourlyReport({ hourlyTemp, hour, onClick, active, hours }) {
    const ref = useRef();

    useEffect(() => {
        hasScrolled = false;
    }, [hours]);

    // make the current hour central in todays hourly report & hour 0 on the other days
    useEffect(() => {
        if (active && !hasScrolled) {
            ref.current.scrollIntoView({ inline: 'center', block: 'nearest' });
            window.scrollTo(0, 0);
            hasScrolled = true;
        }
    }, [active]);

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
