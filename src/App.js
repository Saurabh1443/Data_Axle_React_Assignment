import "./App.css";
import Login from "./Components/Login/login";
import MovieDetail from "./Components/MovieDetails/MovieDetail";
import MovieList from "./Components/MovieList/movieList";
import { Routes, Route,} from "react-router-dom";
import Logout from "./Components/Logout/logout";
import PrivateRoute from "./Components/PrivateRoute/index";
import Signup from "./Components/Signup/signup";

function App() {
  return (
    <div className="App">
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/signup" && <Logout />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/movie/detail/:id"
          element={
            <PrivateRoute>
              <MovieDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
