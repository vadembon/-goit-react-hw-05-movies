import { fetchSearchMovie } from 'components/ServiceApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchBar/SearchBar';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const resp = fetchSearchMovie(query);
    resp.then(data => {
      if (data.length < 1) {
        toast.error('Please enter a name!');
      }
      setMovieList(data);
    });
  }, [query]);

  const handleSearch = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div>
        <MovieList movies={movieList} />
      </div>
    </div>
  );
};

export default Movies;
