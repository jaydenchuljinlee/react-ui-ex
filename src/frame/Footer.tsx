import { Box, Typography } from '@mui/material';
import { SIDEBAR_WIDTH } from './constants/layout';

const Footer = () => (
  <Box component="footer" sx={{ 
    position: `fixed`,
    width: `100%`,
    left: SIDEBAR_WIDTH,
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

export default Footer;
