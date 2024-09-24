import { Skeleton, useMediaQuery } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

export default function MoviesSkeleton() {
  const isMobile = useMediaQuery('(max-width: 600px');

  return (
    <Box mt={2} mb={2}>
      {new Array(5).fill(null).map((_, idx) => (
        <React.Fragment key={idx}>
          <Skeleton
            variant="rectangular"
            width="200px"
            height="32px"
            animation="wave"
          />
          <Stack direction="row" justifyContent="center" flexWrap="wrap">
            {new Array(5).fill(null).map((_, idx) => (
              <Skeleton
                key={idx}
                variant="rectangular"
                width={isMobile ? '100%' : '230px'}
                height={isMobile ? '520px' : '352px'}
                animation="wave"
              />
            ))}
          </Stack>
        </React.Fragment>
      ))}
    </Box>
  );
}
