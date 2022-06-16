import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'

const useNews = () => {
    const date = new Date()
    const formattedDate = format(date, 'yyyy-MM-dd')
    const [allnews, setAllnews] = useState([])

    useEffect(() => {
        const url = `https://newsapi.org/v2/everything?q=tesla&from=${formattedDate}&sortBy=publishedAt&apiKey=${localStorage.getItem('accesstoken')}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllnews(data.articles)
            })

    }, [formattedDate])
    return [allnews, setAllnews];
};

export default useNews;