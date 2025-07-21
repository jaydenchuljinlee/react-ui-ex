import { Box } from '@mui/material';
import DaangnHeader from '../header/DaangnHeader';
import SearchBarMain from './searchbar/SarchBarMain';
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
        width: '100%',
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
            // width: width,
          }}
        >
          <SearchBarMain />
        </main>
      </div>
      
    </Box>
  );
};

export default DaangnMain;
  