import { useLocation } from 'react-router-dom';

import {
  TopMovies,
  MovieItem,
  MovieLink,
  Img,
  Title,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  if (movies.length === 1) return;
  return (
    <TopMovies>
      {movies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <MovieLink to={`/Movies/${id}`} state={{ from: location }}>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : ' https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
              }
              alt={title}
              width={300}
              height={400}
            />
            <Title>{title}</Title>
          </MovieLink>
        </MovieItem>
      ))}
    </TopMovies>
  );
};
