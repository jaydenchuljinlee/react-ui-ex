import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar sx={{ width: `calc(100% - 76px)` }}>
    <Toolbar>
      <Typography variant="h6" component="div">
        My App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
