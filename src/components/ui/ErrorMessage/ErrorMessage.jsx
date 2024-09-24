import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ErrorMessage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      textAlign="center"
    >
      <Typography variant="h4">Произошла непредвиденная ошибка</Typography>
    </Box>
  );
}
