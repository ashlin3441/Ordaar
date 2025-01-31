import React from 'react';
import { Box, Container, styled } from '@mui/material';

const BackgroundImage = styled(Box)(({ left }) => ({
  position: 'absolute',
  top: 0,
  left: `${left}px`,
  width: '400px',
  height: 'auto',
  zIndex: 1,
}));

const Overlay = styled(Box)({
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
  opacity: 1,
});

const ContainerStyled = styled(Container)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  position: 'relative',
  overflow: 'hidden',
});

const BackgroundLayout = ({ children }) => {
  const backgroundPositions = [0, 400, 800, 1200];

  return (
    <ContainerStyled maxWidth={false}>
      {backgroundPositions.map((left, index) => (
        <BackgroundImage key={index} component="img" src="background.png" alt="Background" left={left} />
      ))}
      <Overlay />
      <Box sx={{ zIndex: 2, width: '100%' }}>{children}</Box>
    </ContainerStyled>
  );
};

export default BackgroundLayout;
