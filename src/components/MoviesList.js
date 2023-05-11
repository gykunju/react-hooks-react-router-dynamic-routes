import React from 'react'

function MoviesList({movies}) {
    const renderMovies = object.keys(movies).map((movieID)=>(
       <li key={movieID}>
            <link to={'/movies/${movieID}'}>{movies[movieID].title}</link>
        </li>
    ))
  return (
    <ul>
        {renderMovies}
    </ul>
  )
}

export default MoviesList