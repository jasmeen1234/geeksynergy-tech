import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '.././App.css';
import Company from './Company';

export default function CompanyInfo() {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        axios.post('https://hoblist.com/api/movieList', {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
        })
        .then(response => {
            setUserData(response.data.result);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data');
        });
    };

    return (
        <div>
            <Company />
            <div className='company_info'>
                {error ? (
                    <div>Error: {error}</div>
                ) : (
                    userData.map(item => (
                        <div className='row' key={item.id}>
                            <div>
                                <img style={{ maxHeight: "80px", maxWidth: "70px", padding: "10px" }} src={item.poster} alt={item.title} />
                            </div>
                            <div className='col'>
                                Genre: {item.genre}<br />
                                Director: {item.director}<br />
                                Starring: {item.stars}<br />
                                Mins | {item.language} | 1 Apr
                                <div style={{ color: "lightblue" }}>
                                    {item.pageViews} views | voted by {item.totalVoted} people
                                </div>
                            </div>
                            <button className='bttn'>Watch Trailer</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
