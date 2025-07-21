import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
  } from '@mui/material';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import DaangnHeader from '../header/DaangnHeader';
  import MainLocationPrompt from './LocationPrompt';
  import SearchBarSection from './SearchBarSection';
  import { useResponsiveFullWidth } from '../constants/layout';
  

  import '../../assets/css/daangn/daangn.css';
  
  const DaangnMain = () => {
    const width = useResponsiveFullWidth();  
  
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          display: 'block'
        }}>
          <DaangnHeader />
          <main
            // className="main-top"
            style={{
              width: width,
            }}
          >
            <div className="pl_20_large pr_20_large pt_1.5_base">
              <MainLocationPrompt />
              <SearchBarSection />
            </div>
          </main>
        </div>
        
      </Box>
    );
  };
  
  export default DaangnMain;
  