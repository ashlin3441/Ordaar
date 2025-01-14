import React from 'react';
import { Box, Container } from '@mui/material';

const BackgroundLayout = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        position: 'relative',
        overflow: 'hidden', 
      }}
    >
      <Box
        component="img"
        src="background.png"
        alt="Background"
        sx={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '400px',
          height: 'auto',
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="background.png"
        alt="Background"
        sx={{
          position: 'absolute',
          top: '0px',
          left: '400px',
          width: '400px',
          height: 'auto',
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="background.png"
        alt="Background"
        sx={{
          position: 'absolute',
          top: '0px',
          left: '800px',
          width: '400px',
          height: 'auto',
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="background.png"
        alt="Background"
        sx={{
          position: 'absolute',
          top: '0px',
          left: '1200px',
          width: '400px',
          height: 'auto',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #FDD30F, #FF6B28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 0,
          padding: 4,
          boxSizing: 'border-box',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 1,  // Adjust opacity as needed
        }}
      />
      <Box sx={{ zIndex: 2, width: '100%' }}>{children}</Box>
    </Container>
  );
};

export default BackgroundLayout;
