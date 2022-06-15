import React from 'react';

const Home = () => {
    const x= localStorage.getItem('accesstoken')
    return (
        <div>
            <h2>This is home {localStorage.getItem('accesstoken')}</h2>
        </div>
    );
};

export default Home;