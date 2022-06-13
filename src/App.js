import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar'
function App() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
      axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err))
  }, [])
  
  const [search,setSearch] = useState('')
  const[skander,setSkander]=useState(5)
  return (
    <div className="App">
      <NavBar movies={movies} setMovies={setMovies} setSkander={setSkander} setSearch={setSearch}/>
      <Movie  movies={movies} skander={skander} search={search} />
    </div>
  );
}

export default App;
