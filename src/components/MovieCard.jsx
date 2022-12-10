import React from 'react'

const MovieCard = ({ Title, Poster }) => {
  return (
    <div className='movieCard'>
        <img src={Poster} alt="" className='poster-img'/>
        <div className="movie-title">
            <p className='title'>{Title}</p>
        </div>
        
    </div>
  )
}

export default MovieCard