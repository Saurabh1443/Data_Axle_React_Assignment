import './App.css';
import Login from './Components/Login/login'
import MovieDetail from './Components/MovieDetails/MovieDetail';
import MovieList from './Components/MovieList/movieList';
import {Routes,Route,redirect} from "react-router-dom"
import Logout from './Components/Logout/logout';

function App() {
  
    return (
      <div className="App">
        < Logout  />
        
        <Routes>  
           <Route exact path='/' element={<Login />} />
       <Route exact path='/home' element={<MovieList />} />
      <Route exact path ='/movie/detail/:id' element = {<MovieDetail />}/>
      
    </Routes>
   
  </div>)
  
 
}

export default App;
