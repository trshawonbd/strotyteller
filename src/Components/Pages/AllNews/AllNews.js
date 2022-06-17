import React, { useState } from 'react';
import News from './News';
import { Link } from 'react-router-dom';
import useNews from '../../Hooks/useNews';

const AllNews = () => {
    const [allnews] = useNews();
    const [searchNews, setSearchNews] = useState('');
    console.log(allnews)
    const randomNews = allnews?.sort(() => 0.5 - Math.random());

    return (
        <div>
            <div className='flex justify-center my-5'>
                <input
                    onChange={(e) => {
                        setSearchNews(e.target.value)
                    }}
                    type="text" placeholder="search by title" class="input input-bordered input-primary w-full max-w-xs" />
            </div>

            <h2 className='text-center text-2xl my-6'>{allnews?.length > 0 ?
                <div className='invisible'>
                    allnews.length
                </div> :

                <div className='text-error text-center'>
                    You have a wrong authentication key please register from here at first. <a className='font-bold text-warning' href="https://newsapi.org/register" target="_blank">Here</a>
                </div>
            }</h2>           

            <div className='grid lg:grid-cols-3 justify-items-center justify-center gap-4 mb-3'>
                {
                    randomNews?.filter((news) => {
                        if (searchNews === '') {
                            return news
                        }
                        else if (news?.title.toLowerCase().includes(searchNews.toLocaleLowerCase())) {
                            return news
                        }
                    }).map((news, index) => <News
                        key={index}
                        news={news}
                    ></News>)
                }
            </div>
            <div className='flex justify-center items-center'>
            <button className='btn btn-secondary my-5'><Link to='/profile'>Check out Your Profile</Link></button>
            </div>
        </div>
    );
};

export default AllNews;