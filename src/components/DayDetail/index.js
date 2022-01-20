import './styles.css';
import Celcius from '../Celcius';

function DayCard({ src, day, temp, onClick, active }) {
    return (
        <div className={`daycard ${active ? 'active' : ''}`} onClick={onClick}>
            <div className='day'>{day}</div>
            <img alt='weather icon' src={src} className='day-icn' />
            <div className='temp'>
                {Math.round(temp)}
                <Celcius />
            </div>
        </div>
    );
}

export default DayCard;
