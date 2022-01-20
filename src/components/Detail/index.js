import './styles.css';

function Detail({ children, label, value, unit }) {
    return (
        <div className='detail'>
            <div className='label'>{label}</div>
            <div className='value'>
                {Math.round(value)}
                {unit}
            </div>
        </div>
    );
}

export default Detail;
