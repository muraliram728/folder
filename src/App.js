import React from 'react';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Container className='top_60'>
        <Grid container sx={{ gap: 3 }}>
          <Grid item xs={12} sm={12} md={4} lg={3} >
            <Profile />
          </Grid>
          <Grid item xs >
            <Header />
            <div className='main_content container_shadow'>
            <Routes>
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/' element={<Resume />} />
            </Routes>
            </div>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
