import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import BackgroundLayout from '../components/BackgroundLayout'; 
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles/Login_Styles';
import { routes } from '../routes/routes';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.Login);
  };

  return (
    <BackgroundLayout>
      <Box sx={styles.homeContainer} onClick={handleClick}>
        <Box sx={styles.contentBox}>
          <Typography variant="h2" component="h1" sx={styles.Hometitle}>
            Orddar
          </Typography>
          <Typography variant="subtitle1" sx={styles.Homesubtitle}>
            Perfect food companion
          </Typography>
        </Box>
      </Box>
    </BackgroundLayout>
  )
};

export default Home;
