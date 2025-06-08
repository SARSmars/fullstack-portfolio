import React from 'react'

function Results({results}) {
  return (
    <div>
        {results.map((result) => (
            <div key={result.id}>
            <h2>{result.title || result.name}</h2>
            {/* <p>{result.overview}</p> */}
            <p>Rating: {result.vote_average}</p>
            {/* <p>Release Date: {result.release_date || result.first_air_date}</p>  */}
            {/* <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title || result.name} /> */}
            </div>
        ))}
    </div>
  )
}

export default Results