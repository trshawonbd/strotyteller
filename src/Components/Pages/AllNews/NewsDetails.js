import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import useNews from '../../Hooks/useNews';
import Loading from '../../Shared/Loading/Loading';


const NewsDetails = () => {
    const navigate = useNavigate();
    const [allnews] = useNews();
    const [news, setNews] = useState({})
    console.log(news)
    const param = useParams();

    const { name } = param;
    console.log(name)

    useEffect(() => {
        const singleNews = allnews.find((news) => news?.source?.name === name);
        setNews(singleNews)
    }, [allnews, name])
    console.log(news)

    if(news === 'undefined'){
        <Loading></Loading>
    }

    return (
        <div className='my-5 h-screen'>
            <h2 className='text-3xl font-bold text-center'>Title: <span className='text-error'>{news?.title}</span></h2>
             <div class="hero my-16 min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={news?.urlToImage} class="max-w-sm rounded-lg shadow-2xl"  alt='Images'/>
                    <div>
                        <h1 class="text-xl font-bold">Author: {news?.author}</h1>
                        <p class="py-6">{news?.description}</p>
                        <p className='py-6'>Content: {news?.content}</p>
                        <div class="badge badge-secondary my-2">Source: {news?.source?.name}</div> <br />
                        <div class="badge badge-warning my-2">Published at: {news?.publishedAt}</div> <br />
                        <button class="btn btn-primary my-2"><a href={news?.url} target="_blank" >More Info</a></button> <br />

                         <button onClick={() => navigate(-1)} class="btn btn-primary my-2">Go Back</button> <br /> 
                        
                    </div>
                </div>
            </div> 

        </div>
    );
};

export default NewsDetails;