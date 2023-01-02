import { Suspense } from 'react';
import { fetchMovieDetails } from 'components/ServiceApi';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import {
  Box,
  DetailsBox,
  InfoBox,
  Title,
  BtnList,
  Btn,
  BtnBack,
  BtnBackText,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const resp = fetchMovieDetails(id);
    resp.then(data => {
      setDetails(data);
    });
  }, [id]);
  if (!details) return;

  const { poster_path, title, vote_average, overview, genres, release_date } =
    details;

  const year = new Date(release_date).getFullYear();
  const parseGenres = genres.map(genre => genre.name).join(' ');

  return (
    <div>
      <Box>
        <BtnBackText>
          <BtnBack to={backLinkHref}>Go back</BtnBack>
        </BtnBackText>
        <DetailsBox>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : ' https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
            }
            alt={title}
            width={300}
            height={400}
          />
          <InfoBox>
            <h2>
              {title} ({year})
            </h2>
            <p>
              <b>User score: </b>User score: {vote_average.toFixed(1)}
            </p>

            <p>
              {' '}
              <b>Overview:</b>
              <br />
              {overview}
            </p>

            <p>
              <b>Genres: </b>

              {parseGenres}
            </p>
          </InfoBox>
        </DetailsBox>
      </Box>
      <div>
        <Title>Additional information</Title>
        <BtnList>
          <li>
            <Btn to="cast" state={{ from: location.state?.from }}>
              Cast
            </Btn>
          </li>
          <li>
            <Btn to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Btn>
          </li>
        </BtnList>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
