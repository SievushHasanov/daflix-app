import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import { initialState, selectQuery } from '../../../features/currentQuerySlice';

export default function SelectMovies({
  countriesList,
  genresList,
  countries,
  order,
  year,
  genreId,
}) {
  const dispatch = useDispatch();

  const orderList = [
    { title: 'По рейтингу', value: 'RATING' },
    { title: 'По оценкам', value: 'NUM_VOTE' },
  ];

  const yearList = new Array(60).fill(null).map((_, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }));

  return (
    <Stack
      mt={2}
      mb={2}
      sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1 }}
    >
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select
          value={order}
          onChange={e =>
            dispatch(
              selectQuery({
                order: e.target.value,
              }),
            )
          }
          label="Cортировка"
        >
          {orderList.map(order => (
            <MenuItem key={order.value} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select
          value={countries}
          onChange={e =>
            dispatch(
              selectQuery({
                countries: e.target.value,
              }),
            )
          }
          label="Страна"
        >
          {countriesList.map(country => (
            <MenuItem key={country.id} value={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select
          value={genreId}
          onChange={e =>
            dispatch(
              selectQuery({
                genreId: e.target.value,
              }),
            )
          }
          label="Жанр"
        >
          {genresList.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select
          value={year}
          onChange={e =>
            dispatch(
              selectQuery({
                year: e.target.value,
              }),
            )
          }
          label="Год"
        >
          {yearList.map(year => (
            <MenuItem key={year.value} value={year.value}>
              {year.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button
          onClick={() =>
            dispatch(
              selectQuery({
                ...initialState,
              }),
            )
          }
          variant="outlined"
          startIcon={<CloseIcon />}
        >
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
}
