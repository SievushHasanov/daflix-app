import { Box, Link, Rating, Stack, Tooltip } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './MovieCard.module.css';

export default function MovieCard({ movie, reload = false }) {
  const linkProps = reload
    ? { component: 'a', href: `/movie/${movie.kinopoiskId}` }
    : { component: RouterLink, to: `/movie/${movie.kinopoiskId}` };

  const shortTitle = str => (str.length > 20 ? str.slice(0, 20) + '...' : str);

  return (
    <Stack key={movie.kinopoiskId}>
      <Link {...linkProps} sx={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={styles.img}
        />
        <Link
          component="p"
          sx={{
            width: '200px',
            textDecoration: 'none',
            color: 'inherit',
          }}
          textAlign="center"
        >
          <Tooltip title={`${movie.nameRu ? movie.nameRu : movie.nameEn}`}>
            {movie.nameRu ? shortTitle(movie.nameRu) : shortTitle(movie.nameEn)}
          </Tooltip>
        </Link>
      </Link>

      {movie.ratingKinopoisk && (
        <Stack alignItems="center">
          <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
            <Box>
              <Rating
                name="read-only"
                value={movie.ratingKinopoisk / 2}
                readOnly
              />
            </Box>
          </Tooltip>
        </Stack>
      )}
    </Stack>
  );
}
