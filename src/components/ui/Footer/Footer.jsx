import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;Daflix&raquo; 18+ <br />
        Все права принадлежат рабообладателям 😈
      </Typography>
      <Typography variant="h4" color="primary.main">
        Daflix
      </Typography>
    </Stack>
  );
}
