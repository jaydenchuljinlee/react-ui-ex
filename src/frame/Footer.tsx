import { Box, Typography } from '@mui/material';
import { useResponsiveSidebarWidth } from './constants/layout';

const Footer = () => {
    const left = useResponsiveSidebarWidth();
    
    return (
        <Box component="footer" sx={{ 
          position: `fixed`,
          width: `100%`,
          left: left,
          right: 0,
          bottom: 0,
          padding: '16px 24px',
          bgcolor: 'grey.100'
      
         }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 My Company. All rights reserved.
          </Typography>
        </Box>
      );
}

export default Footer;
