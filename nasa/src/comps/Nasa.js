import React, { useEffect, useState } from 'react'


const key = process.env.REACT_APP_key;

function Nasa() {
    const [title, setTitle] = useState('title')
    const [path, setPath] = useState()
    const [desc, setDesc] = useState()
        useEffect(() => {
            const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${key}`;


            const fetchData = async () => {
                const result = await fetch(API_URL);
                const data = await result.json();
                console.log(data)
                setTitle(data.title)
                setPath(data.url)
                setDesc(data.explanation)
            };
            fetchData();
        },[]);



    return (
        <div>
            <h1>{title}</h1>
            <img src={path} alt="foto" />
            <p>{desc}</p>
        </div>
    )
}

export default Nasa