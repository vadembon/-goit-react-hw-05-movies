import { fetchMovieRewiews } from 'components/ServiceApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { List, Item, Review } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  useEffect(() => {
    const resp = fetchMovieRewiews(id);
    resp.then(data => {
      console.log(data);
      setReviews(data.results);
    });
  }, [id]);
  if (!reviews) return;
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <Item key={id}>
          <Review>
            <b>Author: </b>
            {author}
          </Review>
          <Review>{content}</Review>
        </Item>
      ))}
    </List>
  );
};
