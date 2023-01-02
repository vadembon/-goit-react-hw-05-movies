import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
export const App = () => {
  const Home = lazy(() => import('pages/Home'));
  const Movies = lazy(() => import('pages/Movies'));
  const MovieDetails = lazy(() =>
    import('pages/MovieDetailsPage/MovieDetails')
  );

  return (
    <>
      <LayoutHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />

          <Route path="/Movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
    </>
  );
};
