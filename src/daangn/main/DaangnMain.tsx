import { Box } from '@mui/material';
import DaangnHeader from '../header/DaangnHeader';
import SearchBarMain from './searchbar/SarchBarMain';
import CategoryView from './CategoryView';
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
        justifyContent: 'center',
      }}
    >
      <div style={{
        display: 'block'
      }}>
        <DaangnHeader />
        <main>
          <SearchBarMain />
          <CategoryView />
        </main>
      </div>
      
    </Box>
  );
};

export default DaangnMain;
  