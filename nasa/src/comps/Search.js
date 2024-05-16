import React, { useState, useEffect } from 'react'

function Search({ onDateChange }) {
    const [date, setDate] = useState('')
    useEffect(() => {
        // Get today's date
        const today = new Date();
        // Format the date to YYYY-MM-DD
        const formattedDate = today.toISOString().split('T')[0];
        setDate(formattedDate);
    }, []);
    
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