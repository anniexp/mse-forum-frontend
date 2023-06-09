import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AppNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Forum App
          
            <Button color="inherit" component={Link} to="/" >Home</Button>
            <Button color="inherit" component={Link} to="/topics" >Topics</Button>
            <Button color="inherit" component={Link} to="/users/add" >Add User</Button>

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}