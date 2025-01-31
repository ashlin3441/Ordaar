import React from 'react';
import { Box, Container } from '@mui/material';
import { styles } from '../styles/Login_Styles';

const BackgroundLayout = ({ children }) => {
  const backgroundPositions = [0, 400, 800, 1200];

  return (
    <Container sx={styles.ContainerStyled} maxWidth={false}>
      {backgroundPositions.map((left, index) => (
        <Box
          key={index}
          component="img"
          src="background.png"
          alt="Background"
          sx={styles.BackgroundImage(left)}
        />
      ))}
      <Box sx={styles.Overlay} />
      <Box sx={{ zIndex: 2, width: '100%' }}>{children}</Box>
    </Container>
  );
};

export default BackgroundLayout;
