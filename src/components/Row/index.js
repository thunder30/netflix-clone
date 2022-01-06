import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from '../../axios'
import './Row.css'

const base_image_url = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLandscapPoster }) {
    const [movies, setMovies] = useState([])

    const generalSetting = {
        infinite: true,
        speed: 500,
        arrows: false,
    }

    const settings = {
        ...generalSetting,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
                // less 1200px -> desktops
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
            {
                // less 1024px -> tablet
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
            {
                // less 768px -> landscap phone
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                // less 576px -> portrait phone
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(fetchUrl)
                setMovies(res.data.results)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    console.log(movies)

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>

            <div className="row__posters">
                <Slider {...settings} style={{ width: '100%' }}>
                    {movies.map((movie) => (
                        <div style={{ width: 100 }} key={movie.id}>
                            <img
                                className="row__poster"
                                src={`${base_image_url}${
                                    isLandscapPoster
                                        ? movie.backdrop_path
                                        : movie.poster_path
                                }`}
                                alt={movie.title}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Row
