import { Box } from '@mui/material';
import { SIDEBAR_WIDTH, HEADER_HEIGHT, BREADCRUMB_HEIGHT } from './constants/layout';

const MainContent = () => (
    <Box
        component="main"
        sx={{
        position: 'fixed',
        top: HEADER_HEIGHT + BREADCRUMB_HEIGHT,
        left: SIDEBAR_WIDTH,
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
  
  export default MainContent;
  