import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { SIDEBAR_WIDTH, HEADER_HEIGHT, BREADCRUMB_HEIGHT } from './constants/layout';

const BreadcrumbsNav = () => (
  <Box
    sx={{
      position: 'fixed',
      height: BREADCRUMB_HEIGHT,
      top: HEADER_HEIGHT,
      left: SIDEBAR_WIDTH,
      right: 0,
      padding: '16px 24px',
      bgcolor: 'background.default',
      // zIndex: (theme) => theme.zIndex.appBar - 1, // AppBar보다 아래
    }}
  >
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/section">
        Section
      </Link>
      <Typography color="text.primary">Current</Typography>
    </Breadcrumbs>
  </Box>
);

export default BreadcrumbsNav;
