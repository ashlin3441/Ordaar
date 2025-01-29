import React from 'react';
import { Box } from '@mui/material';

const Background = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: '#f5f5f5', // Fallback color while image loads
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/background-1.png')`, // Replace with your image path
          backgroundSize: 'cover',  
          backgroundRepeat: 'no-repeat',
          
          zIndex: 1,
        }}
      />
      
      {/* Content Layer */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Background;