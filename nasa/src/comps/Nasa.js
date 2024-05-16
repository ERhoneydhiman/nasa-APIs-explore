import React, { useEffect, useState } from 'react'
import Search from './Search';



const key = process.env.REACT_APP_key;

function Nasa() {
    const [dateError, setDateError] = useState('')
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('title')
    const [path, setPath] = useState()
    const [desc, setDesc] = useState()
    useEffect(() => {
        const API_URL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`;


        const fetchData = async () => {
            try {
                const result = await fetch(API_URL);
                if (!result.ok) {
                    throw new Error('failed to fetch data')
                }
                const data = await result.json();
                console.log(data)
                setTitle(data.title)
                setPath(data.url)
                setDesc(data.explanation)
                setDateError('')
            } catch (error) {
                setDateError('*error in date !!!')
            }
        };

        if (date) {
            fetchData();
        }else{
            fetchData();
        }

    }, [date]);

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }



    return (
        <div>
            <Search onDateChange={handleDateChange} />
            <p>{dateError}</p>
            <h1>{title}</h1>
            <img src={path} alt="foto" />
            <p>{desc}</p>
        </div>
    )
}

export default Nasa