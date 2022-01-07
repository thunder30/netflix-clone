import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import requests from '../../requests'
import './Banner.css'

const baseImageUrl = 'https://image.tmdb.org/t/p/original'

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(requests.fetchTrending)

                setMovie(
                    res.data.results[
                        Math.floor(Math.random() * res.data.results.length)
                    ]
                )
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n) + '...' : str
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("${baseImageUrl}/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.original_title}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
