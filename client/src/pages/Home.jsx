import React from 'react';
import { Typography, Box } from '@mui/material';
import BackgroundLayout from './BackgroundLayout'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <BackgroundLayout>
      <Box
        sx={{ width: '100%', height: '100vh', position: 'relative', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <Box textAlign="center" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Typography variant="h2" component="h1" sx={{ fontFamily:'Outfit',color: 'white',fontSize:"70px", fontWeight: 'bold' ,marginBottom:0, }}>
            Orddar
          </Typography>
          <Typography variant="subtitle1" sx={{ fontFamily:'Outfit',color: 'white', marginTop: 0 }}>
            Perfect food companion
          </Typography>
        </Box>
      </Box>
    </BackgroundLayout>
  );
};

export default Home;
