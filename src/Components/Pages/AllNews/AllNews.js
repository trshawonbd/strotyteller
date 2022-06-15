import React, { useEffect, useState } from 'react';
import News from './News';

const AllNews = () => {
    const [allnews, setAllnews] = useState([])
    useEffect (() =>{
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-05-15&sortBy=publishedAt&apiKey=${localStorage.getItem('accesstoken')}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setAllnews(data.articles)
        })

    }, [])
    return (
        <div>
            <h2 className='text-center text-2xl my-6'>All news {allnews?.length >0 ? allnews.length : <div className='text-error text-center'>
                You have a wrong authentication key please register from here at first. <a className='font-bold text-warning' href="https://newsapi.org/register" target="_blank">Here</a>
            </div> 
            }</h2>

            <div className='grid lg:grid-cols-3 justify-items-center justify-center gap-4'>
                
            {
                allnews.map((news, index) => <News 
                key={index}
                news={news}
                ></News>)
            }
            </div>

        </div>
    );
};

export default AllNews;