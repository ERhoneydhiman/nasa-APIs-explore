import React, { useEffect, useState } from 'react'
import Search from './Search';
import Footer from './Footer';



const key = process.env.REACT_APP_key;

function Nasa() {
    const [info, setInfo] = useState("Today")
    const [dateError, setDateError] = useState()
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
                setInfo(data.date)


            } catch (error) {
                setDateError('*error in date !!!')
            }
        };

        if (date) {
            fetchData();
        } else {
            fetchData();
        }

    }, [date]);

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }



    return (
        <div>

            <header>
                <img src="imgs/logo.png" alt="logoo" />
                <div className="header-text">
                    <h1>Astronomy Picture of the Day</h1>
                    <p>Fetched from NASA's API</p>
                </div>
            </header>

            <div className="info">
                <p>{info}'s  Picture  and  Fact</p>
            </div>

            <div className="main">
                <img src={path} alt="foto" />
                <div className="one">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>

            <div className="handle-date">
                <p>Change Date to See Another picture and Fact</p>
                <p>{dateError}</p>
                <Search onDateChange={handleDateChange} />
            </div>

            <Footer />
        </div>
    )
}

export default Nasa