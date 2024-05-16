import React, { useState } from 'react'

function Search({ onDateChange }) {
    const [date, setDate] = useState()
    
    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleSearch = () => {
        onDateChange(date)
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div>
            
            <input
                onChange={handleDate}
                onKeyDown={handleKeyPress}
                id='date-field'
                value={date}
                placeholder='dd-mm-yyyy'
                type="date"
            />
            <button onClick={handleSearch}>SEARCH</button>
        </div>
    )
}

export default Search