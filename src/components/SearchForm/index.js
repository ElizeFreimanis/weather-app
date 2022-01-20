import './styles.css';

function SearchForm({ onSubmit, value, onChange }) {
    return (
        <form action='.' onSubmit={onSubmit}>
            <input
                className='search-bar'
                type='search'
                value={value}
                onChange={onChange}
            />
        </form>
    );
}

export default SearchForm;
