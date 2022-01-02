import React, { useState, useEffect } from 'react'
import axios from '../../axios'

const base_image_url = 'https://image.tmdb.org/t/p/original'

function Movies({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

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
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        src={`${base_image_url}${movie.poster_path}`}
                        alt={movie.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Movies
