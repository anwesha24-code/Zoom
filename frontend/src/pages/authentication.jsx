import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from './components/SignInCard';
import Content from './components/Content';
import React from 'react';

export default function Authentication(props) {
  return (
    <>
      {/* CssBaseline resets browser styles to match your theme settings */}
      <CssBaseline enableColorScheme />
      
      <Stack
        direction="column"
        component="main"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',   /* Forces full screen layout height */
          width: '100vw',       /* Forces full viewport span */
          backgroundColor: '#000000', /* Enforces your strict solid black layout */
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, sm: 8, md: 12 },
            p: { xs: 2, sm: 4 },
            m: 'auto',
            maxWidth: '1200px',
            width: '100%'
          }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </>
  );
}