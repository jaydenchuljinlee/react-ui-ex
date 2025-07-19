import { Box } from '@mui/material';
import { HEADER_HEIGHT, BREADCRUMB_HEIGHT, useResponsiveSidebarWidth } from './constants/layout';

const MainContent = () => {
    const left = useResponsiveSidebarWidth();

    return (
        <Box
          component="main"
          sx={{
            position: 'fixed',
            top: HEADER_HEIGHT + BREADCRUMB_HEIGHT,
            left: `${left}px`,
            right: 0,
            bottom: 0,
            overflow: 'auto',
            padding: 3,
            bgcolor: 'background.default',
          }}
        >
          <div>헬로</div>
        </Box>
    );    
}
  
  export default MainContent;
  