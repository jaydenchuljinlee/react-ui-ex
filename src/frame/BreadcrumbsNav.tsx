import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { useResponsiveSidebarWidth, useResponsiveHeaderHeight, useResponsiveBreadcrumbHeight } from './constants/layout';

const BreadcrumbsNav = () => {
  const left = useResponsiveSidebarWidth();
  const top = useResponsiveHeaderHeight();
  const height = useResponsiveBreadcrumbHeight();
  
  return (
    <Box
      sx={{
        position: 'fixed',
        height: height,
        top: top,
        left: left,
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
}

export default BreadcrumbsNav;
