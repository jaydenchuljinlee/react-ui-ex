import { Breadcrumbs, Link, Typography } from '@mui/material';

const BreadcrumbsNav = () => (
  <Breadcrumbs aria-label="breadcrumb" sx={{ width: `100%`, marginLeft: `76px`, paddingLeft: `24px`, marginTop: '80px'}}>
    <Link underline="hover" color="inherit" href="/">
      Home
    </Link>
    <Link underline="hover" color="inherit" href="/section">
      Section
    </Link>
    <Typography color="text.primary">Current</Typography>
  </Breadcrumbs>
);

export default BreadcrumbsNav;
