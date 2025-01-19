import React from 'react';
import { 
  Typography, 
  Button, 
  IconButton,
  Container,
  Paper,
  Box
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import HomeIcon from '@mui/icons-material/Home';

const NewNavbar = () => {
  return (
    <Paper 
      elevation={2}
      sx={{
        position: 'fixed',
        background: 'white',
        width: '100%',
        // zIndex: 1100
      }}
    >
      <Container>
        <Grid container>
          <Grid xs={12} sm={10} md={8}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1,
                px: 2,
                minHeight: 64
              }}
            >
              <IconButton 
                color="primary" 
                aria-label="home"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>

              <Typography 
                variant="h6" 
                component="div" 
                sx={{ flexGrow: 1, color: 'text.primary' }}
              >
                My App
              </Typography>

              <Grid 
                container 
                spacing={1} 
                sx={{ 
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'flex-end',
                  flex: 'none',
                  maxWidth: 'fit-content'
                }}
              >
                <Grid>
                  <Button color="primary">Home</Button>
                </Grid>
                <Grid>
                  <Button color="primary">About</Button>
                </Grid>
                <Grid>
                  <Button color="primary">Contact</Button>
                </Grid>
                <Grid>
                  <Button color="primary">Login</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default NewNavbar;