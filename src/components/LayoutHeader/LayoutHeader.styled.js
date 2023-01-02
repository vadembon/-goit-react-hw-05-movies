import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  margin-bottom: 45px;
`;

export const StyledLink = styled(NavLink)`
  border-radius: 6px;

  background-color: teal;
  color: black;
  padding: 8px 20px;
  text-decoration: none;
  font-size: 22px;
  &:not(:first-child) {
    margin-left: 16px;
  }
  &.active {
    background: lightgray;
    color: red;
  }
`;

export const Nav = styled.nav`
  margin-left: 90px;
`;
