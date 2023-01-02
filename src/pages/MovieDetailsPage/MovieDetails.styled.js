import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Box = styled.div`
  width: 1050px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 15px 100px;
  box-shadow: gray 0px 0px 8px 6px;
`;

export const DetailsBox = styled.div`
  display: flex;
`;

export const InfoBox = styled.div`
  padding-left: 30px;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 24px;
`;
export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    &:not(:first-child) {
      margin-left: 16px;
    }
    &:hover {
      background-color: lightgray;
    }
  }
`;

export const Btn = styled(NavLink)`
  border-radius: 6px;

  background-color: teal;
  color: black;
  padding: 6px 10px;
  text-decoration: none;
  &.active {
    background: lightgray;
    color: red;
  }
`;

export const BtnBack = styled(Link)`
  color: black;
  padding: 6px 10px;
  text-decoration: none;
`;

export const BtnBackText = styled.div`
  width: 80px;
  padding: 6px 10px;
  border-radius: 6px;

  background-color: teal;
  margin-bottom: 5px;
  &:hover {
    background-color: lightgray;
  }
`;
