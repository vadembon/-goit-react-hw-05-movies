import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 0.1fr));
  gap: 16px;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 15px 56px;
  list-style: none;
`;

export const MovieItem = styled.li`
  margin: 0;

  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  width: 100%;

  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: gray 0px 0px 8px 6px;
    transform: scale(1.03);
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Img = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: -webkit-fill-available;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
`;
