import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS } from '../constants';
import Layout from './Layout';
import ActorDetails from './pages/ActorDetails';
import ErrorPage from './pages/ErrorPage';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MoviesListMain from './pages/MoviesListMain';
import MoviesListTop from './pages/MoviesListTop';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies />,
        },
        ...TOP_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListTop />,
        })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain />,
        })),
        {
          path: '/movie/:id',
          element: <MovieDetails />,
        },
        {
          path: '/actor/:id',
          element: <ActorDetails />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
