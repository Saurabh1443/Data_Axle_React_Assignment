import './App.css';
import Login from './Components/Login/login'
import MovieDetail from './Components/MovieDetails/MovieDetail';
import MovieList from './Components/MovieList/movieList';
import {Routes,Route} from "react-router-dom"
import Logout from './Components/Logout/logout';

function App() {
  return (
    <div className="App">
      {window.location.pathname !== '/login'&& < Logout />}
      <Routes>  
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MovieList />} />
        <Route path ='/movie/detail/:id' element = {<MovieDetail />}/>
      </Routes>
     
    </div>
  );
}

export default App;
