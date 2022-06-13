import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar'
function App() {
  const [search,setSearch] = useState('')
  const[value,setValue]=useState(5)
  return (
    <div className="App">
      <NavBar setValue={setValue} setSearch={setSearch}/>
      <Movie skander={value} search={search} />
    </div>
  );
}

export default App;
