import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ width: `100%`, marginLeft: `76px`, paddingLeft: `24px`, position: `fixed`,bottom: 0, py: 2, bgcolor: 'grey.100' }}>
    <Typography variant="body2" color="text.secondary">
      © 2025 My Company. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
