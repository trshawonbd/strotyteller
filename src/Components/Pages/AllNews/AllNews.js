import React, { useEffect, useState } from 'react';
import News from './News';
import {  useNavigate } from 'react-router-dom';
import useNews from '../../Hooks/useNews';

const AllNews = () => {
    
    const [allnews, setAllNews] = useNews();
    console.log(allnews)



    const randomNews = allnews?.sort(() => 0.5 - Math.random());

   
    
    return (
        <div>
            <h2 className='text-center text-2xl my-6'>All news {allnews?.length > 0 ? allnews.length : <div className='text-error text-center'>
                You have a wrong authentication key please register from here at first. <a className='font-bold text-warning' href="https://newsapi.org/register" target="_blank">Here</a>
            </div>
            }</h2>


            
                <div className='grid lg:grid-cols-3 justify-items-center justify-center gap-4 mb-3'>

                {
                    randomNews?.map((news, index) => <News
                        key={index}
                        news={news}
                        
                    ></News>)

                }


            </div>
            



        </div>
    );
};

export default AllNews;