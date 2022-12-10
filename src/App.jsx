import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import  { useState, useEffect } from 'react';

function App() {

  const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=ff87bb53';

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&type=movie`);
    const movies = await response.json();
    console.log(movies.Search);
    setMovies(movies.Search);
  }

  const searchSeries = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&type=series`);
    const series = await response.json();
    console.log(series.Search);
    setSeries(series.Search);
  }

  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);

    if (event.key === 'Enter') {
      searchMovies(searchTerm);
      searchSeries(searchTerm)
    }
  };

  useEffect(() => {
    searchMovies('superman')
    searchSeries('superman');
  }, []);

  return (
    <div className="app flex justify-center">
      <div>
      <Navbar/>
      <Hero/>
      <Main searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleKeyDown={handleKeyDown} movies={movies} series={series}/>
      </div>
      
      
    </div>
  );
}

export default App;
