import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = ({news}) => {
    
    const navigate = useNavigate();
    const {source, urlToImage, title, author} = news;
    
    
    const handleDetails = (name) =>{
        navigate(`/newsDetails/${name}`)   
    }
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={urlToImage} alt="News Picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Author: {author}</p>
                <div className="card-actions justify-end">
                    <button  onClick={() => handleDetails(source.name)}  className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default News;