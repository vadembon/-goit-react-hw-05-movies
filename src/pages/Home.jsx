import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrending } from 'components/ServiceApi';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const resp = fetchTrending();
    resp.then(data => setMovieList(data));
  }, []);

  //   console.log(data);
  return (
    <div>
      <MovieList movies={movieList} state={{ from: location }} />
    </div>
  );
};

export default Home;
