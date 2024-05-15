import React, { useEffect, useState } from 'react'


const API_KEY = "Ishgh3iyWCqJM7dwzSDkJdm2hMomGX8zyUzouYi5";

function Nasa() {
    const [title, setTitle] = useState('title')
    const [path, setPath] = useState()
    const [desc, setDesc] = useState()
        useEffect(() => {
            const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


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