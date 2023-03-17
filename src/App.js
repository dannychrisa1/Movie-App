import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
//4cce1b36

const API_URL = 'http://www.omdbapi.com?apikey=4cce1b36';

// const movie1 = {
//     "Poster": "N/A",
//     "Title": "A Love Undefined",
//     "Type": "movie",
//     "Year": "2016",
//     "imdbID": "tt4955578"
// }

const App = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState()
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title} `);
        const data = await response.json();

       // console.log(data.Search);
       setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies();
    }, []);

    return(
        <>
        <h1>App</h1>
        <div className="search">
            <input placeholder="Search for movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value) } />
            <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)}/>
        </div>
        {
            movies?.length > 0 
             ? (
                // <div className="container">
                //     <MovieCard movie1={movies[0]} />
                // </div>
               <div className="container">
                    {movies.map((movie) => (
                     <MovieCard movie= {movie} />
                   ))}
               </div>
               
             ) :
            (
              <div className="empty">
                  <h2>No movies found</h2>
              </div>  

            )
        }
        
    
        </>
    )
}

export default App;