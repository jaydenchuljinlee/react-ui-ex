import { useTheme, useMediaQuery } from '@mui/material';

export const SIDEBAR_WIDTH = 240;
export const HEADER_HEIGHT = 64;
export const FOOTER_HEIGHT = 48;
export const BREADCRUMB_HEIGHT = 40;


export const useResponsiveSidebarWidth = (): number => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    if (isMobile) return 0;
    // if (isMedium) return 72;
    return SIDEBAR_WIDTH;
};

export const useResponsiveMainTop = (): number => {
    return HEADER_HEIGHT + BREADCRUMB_HEIGHT;
};

export const useResponsiveHeaderHeight = (): number => {
    return HEADER_HEIGHT;
};

export const useResponsiveBreadcrumbHeight = (): number => {
    return BREADCRUMB_HEIGHT;
};
  
