import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
} from 'components/LayoutHeader/LayoutHeader.styled';
const LayoutHeader = () => {
  return (
    <Header>
      <Nav>
        <StyledLink to="/goit-react-hw-05-movies">Home</StyledLink>
        <StyledLink to="/Movies">Movies</StyledLink>
      </Nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </Header>
  );
};

export default LayoutHeader;
