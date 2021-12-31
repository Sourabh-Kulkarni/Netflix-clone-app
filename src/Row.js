import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/original';
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
        };
        fetchData();
    },[fetchUrl]);
    return (
        <div className='row'>
            <h2>{title}</h2>
        <div className={"row_posters"}>
            {/* maps the movies all along */}
            {movies.map((movie,index) =>(
                <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            ))}
        </div>
        </div>
    )
}

export default Row
