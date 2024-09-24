import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useGetStaffByIdQuery } from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage';

export default function ActorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetStaffByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) return <ErrorMessage />;

  return (
    <>
      <Grid container spacing={4} pt={1}>
        <Grid item xs={12} md={4}>
          <img
            src={data.posterUrl}
            alt={data.nameRu}
            style={{ width: '100%' }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack flexDirection="row">
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
            ></Button>
            <Stack flexDirection="column">
              <Typography variant="h5">{data.nameRu}</Typography>
              <Typography>{data.nameEn}</Typography>
            </Stack>
          </Stack>
          <Typography gutterBottom variant="h5">
            {data.profession === 'Актер' ? 'Об актере' : 'О режиссере'}{' '}
          </Typography>
          <Grid container>
            <Grid xs={6}>
              <Typography gutterBottom>Карьера:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>{data.profession}</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>Рост:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>{data.growth} см</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>Дата рождения:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>
                {data.birthday} ({data.age} лет)
              </Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>Всего фильмов:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>{data.films.length}</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography variant="h5" gutterBottom>
                Факты:
              </Typography>
            </Grid>
            <Grid xs={12}>
              {data.facts.map((fact, idx) => (
                <>
                  <Typography gutterBottom key={fact}>
                    {idx + 1}) {fact}
                  </Typography>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4"> Фильмы</Typography>
        </Grid>
      </Grid>
      <Stack>
        {data.films
          .filter(
            (item, idx, self) =>
              idx === self.findIndex(el => el.filmId === item.filmId),
          )
          .map((film, idx) => (
            <Stack
              key={film.filmId}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>{idx + 1}</Typography>

              <Typography component={Link} to={`/movie/${film.filmId}`}>
                {film.nameRu ? film.nameRu : film.nameEn}
              </Typography>

              <Typography textAlign="center">
                {film.rating ? film.rating : '-'}
              </Typography>
            </Stack>
          ))}
      </Stack>
    </>
  );
}
