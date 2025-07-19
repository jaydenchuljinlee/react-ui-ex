import { Box } from '@mui/material';
import { useResponsiveMainTop, useResponsiveSidebarWidth } from './constants/layout';

const MainContent = () => {
    const left = useResponsiveSidebarWidth();
    const top = useResponsiveMainTop();

    return (
        <Box
          component="main"
          sx={{
            position: 'fixed',
            top: top,
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
  