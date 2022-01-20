import './styles.css';

function HourlyInfo({ title, text }) {
    return (
        <div className='hourly-info'>
            <div className='hourly-info-header'>{title}</div>
            <div className='hourly-info-text'>{text}</div>
        </div>
    );
}

export default HourlyInfo;
