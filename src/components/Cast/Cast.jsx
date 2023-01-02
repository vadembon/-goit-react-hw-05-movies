import { fetchMovieCredits } from 'components/ServiceApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ActhorName, Img } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const resp = fetchMovieCredits(id);
    resp.then(data => {
      console.log(data);
      setCast(data.cast);
    });
  }, [id]);
  if (!cast) return;

  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <Img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : ' https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
            }
            alt={name}
            width="124"
            height="180"
          />
          <ActhorName>
            <b>{name}</b>
          </ActhorName>
          <ActhorName>
            <b>Character: </b>
            <span>{character}</span>
          </ActhorName>
        </li>
      ))}
    </List>
  );
};
