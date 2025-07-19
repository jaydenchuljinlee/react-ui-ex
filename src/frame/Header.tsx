import { AppBar, Toolbar, Typography } from '@mui/material';

import { useResponsiveHeaderHeight, useResponsiveSidebarWidth } from './constants/layout';

const Header = () => {
    const left = useResponsiveSidebarWidth();
    const height = useResponsiveHeaderHeight();
    
    return (
        <AppBar
            position="fixed"
            sx={{
            width: `calc(100% - ${left}px)`,
            height: height,
            left: left,
            }}
        >
            <Toolbar>
            <Typography variant="h6" noWrap component="div">
                My App
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
