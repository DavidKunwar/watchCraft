import React, { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "../components/movieCard"
import Grid from '@mui/material/Grid'
import {useLocation} from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Discover(){
    const [movies, setMovies] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const location = useLocation()
    const paginationTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    useEffect(() => {
        //if SEARCH is made, update 'mode' and 'searchKey'
        let mode = '', searchKey = ''
        if(location.state){
            //Search is made
            mode = 'search'
            searchKey = location.state.searchText
            // setPageNum(1)
            if(location.state.pageNumber === 1){
                setPageNum(1)
                location.state.pageNumber = 0
            }
        }else{
            //Just landing on discover page, and no search is made
            mode = 'discover'
            searchKey = ''
        }
        axios.get(`https://api.themoviedb.org/3/${mode}/movie`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'true',
                page: pageNum,
                query: searchKey,
            }
        })
        .then((response) => {
            setMovies(response.data.results)
            setPageCount(response.data.total_pages)
        }).catch((error) => {
            console.log(error)
        })
    },[location.state, pageNum])

    const nextPage = (event, value) => {
        setPageNum(value);
        //Scroll to top
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          })
        // console.log(pageNum)
      };

    return ( 
        <div>
            <Grid container spacing={2}>
                {
                    movies.map((movie) => 
                    <Grid key={movie.id} item xs={6} sm={4} md={2}>
                        <MovieCard
                        id = {movie.id}
                        posterPath = {movie.poster_path}
                        title = {movie.title}
                        description = {movie.overview}
                        />
                    </Grid>
                )
                }
            </Grid>
            <div className="pagination">
                <ThemeProvider theme={paginationTheme}>
                    <Pagination count={pageCount} page={pageNum} onChange={nextPage} color="primary" size="large" />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Discover