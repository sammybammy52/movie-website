import React from 'react'
import MovieCard from './MovieCard'

const Main = ({ searchTerm, setSearchTerm, handleKeyDown, movies, series }) => {
  return (
    <div className='main '>
        <div className='search-box'>
            <p className='search'>Search</p>
            <input type="text" className=' search-input border-[1px] border-black' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>

        <div className='category-box'>
            <p className='search'>Movies</p>
              <div className="cards-wrapper">
                  {
                      movies?.length > 0 ?
                          (
                            
                              movies.map((i) => (
                                  <MovieCard Poster={i.Poster} Title={i.Title} />
                              ))

                          )
                          :
                          (
                            <MovieCard Title={"No results found"}/>
                          )
                  }
                  

              </div>
            
        </div>

        <div className='category-box'>
            <p className='search'>Series</p>
            <div className="cards-wrapper">
            {
                      series?.length > 0 ?
                          (


                              series.map((i) => (
                                  <MovieCard Poster={i.Poster} Title={i.Title}/>
                              ))

                          )
                          :
                          (
                            <MovieCard Title={"No results found"}/>
                          )
                  }
            </div>
            
        </div>
    </div>
  )
}

export default Main