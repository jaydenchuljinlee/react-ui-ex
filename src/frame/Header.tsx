import { AppBar, Toolbar, Typography } from '@mui/material';

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from './constants/layout';

const Header = () => (
    <AppBar
        position="fixed"
        sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        height: HEADER_HEIGHT,
        ml: `${SIDEBAR_WIDTH}px`,
        zIndex: (theme) => theme.zIndex.drawer + 1, // 사이드바 위에 오도록
        }}
    >
        <Toolbar>
        <Typography variant="h6" noWrap component="div">
            My App
        </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
