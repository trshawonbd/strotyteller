import React from 'react';

const News = ({news}) => {
    const {urlToImage, title, author} = news;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={urlToImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Author: {author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default News;