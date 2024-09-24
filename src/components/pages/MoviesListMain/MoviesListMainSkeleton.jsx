import { Skeleton, Stack, useMediaQuery } from '@mui/material';
import React from 'react';

export default function MoviesListSkeleton() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <Skeleton
        variant="rectangular"
        width="200px"
        height="32px"
        animation="wave"
        sx={{ mt: 2, mb: 2 }}
      />
      <Stack
        mt={2}
        mb={2}
        sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1 }}
      >
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={isMobile ? '100%' : '25%'}
          height={40}
        />
        <Skeleton animation="wave" variant="rounded" width={132} height={40} />
      </Stack>
      <Skeleton
        variant="rectangular"
        width="200px"
        height="32px"
        animation="wave"
        sx={{ mt: 2, mb: 2 }}
      />
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {Array(15)
          .fill(null)
          .map((_, idx) => (
            <React.Fragment key={idx}>
              <Stack flexDirection="column">
                <Skeleton
                  variant="rectangular"
                  width="215px"
                  height="322px"
                  animation="wave"
                />
                <Skeleton variant="text" animation="wave" width="120px" />
                <Skeleton variant="text" animation="wave" />
              </Stack>
            </React.Fragment>
          ))}
      </Stack>
    </>
  );
}
