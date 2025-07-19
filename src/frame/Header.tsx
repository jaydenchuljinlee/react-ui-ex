import { AppBar, Toolbar, Typography } from '@mui/material';

import { HEADER_HEIGHT, SIDEBAR_WIDTH, useResponsiveSidebarWidth } from './constants/layout';

const Header = () => {
    const left = useResponsiveSidebarWidth();
    
    return (
        <AppBar
            position="fixed"
            sx={{
            width: `calc(100% - ${left}px)`,
            height: HEADER_HEIGHT,
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
