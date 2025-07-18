import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <Box sx={{ bgcolor: 'primary.main', color: 'white' }}>
    <Toolbar>
      <Typography variant="h6" component="div">
        My App
      </Typography>
    </Toolbar>
  </Box>
);

export default Header;
