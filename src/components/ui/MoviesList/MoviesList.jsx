import { Pagination, Stack } from '@mui/material';
import React from 'react';

import MovieCard from '../MovieCard';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack alignItems="center" mt={5}>
        <Pagination
          count={totalPages}
          color="primary"
          variant="outlined"
          size="large"
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
}
