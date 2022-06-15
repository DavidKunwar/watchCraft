import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

function Details(){
    const location = useLocation()
    const [movieData, setMovieData] = useState({})
    const [trailerData, setTrailerData] = useState({})
    const [videoAvailable, setVideoAvailable] = useState(false)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${location.state.movieId}`,{
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                append_to_response: 'videos',
            }
        })
        .then((response) => {
            setMovieData(response.data)
            if(response.data.videos.results.length >= 1){
                let trailer = null
                trailer = response.data.videos.results.find(video => video.name === 'Official Trailer' || video.name === 'Trailer')
                trailer ? setTrailerData(trailer) : setTrailerData(response.data.videos.results[0])
                setVideoAvailable(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    },[location.state.movieId.length])

    return(
        <div className='movie-details'>
            { videoAvailable ? 
            <iframe className='trailer' src={`https://www.youtube.com/embed/${trailerData.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            : <img className='trailer' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} /> }

            <div className='grid-container'>
                <div className='grid-item title'>
                    {movieData.title}
                </div>
                <div className='grid-item'>
                    Genre : | {movieData.genres && movieData.genres.map(genre => <p>{genre.name} | </p>)}
                </div>
                <div className='grid-item'>
                    Rating : {movieData.vote_average}
                </div>
                <div className='grid-item overview'>
                    {movieData.overview}
                </div>
            </div>
        </div>
    )
}

export default Details