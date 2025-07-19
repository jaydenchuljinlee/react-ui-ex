import { useTheme, useMediaQuery } from '@mui/material';

export const SIDEBAR_WIDTH = 240;
export const HEADER_HEIGHT = 64;
export const FOOTER_HEIGHT = 48;
export const BREADCRUMB_HEIGHT = 40;

export const getResponsiveSidebarWidth = (isMobile: boolean, isTablet: boolean): number | string => {
    if (isMobile) return 0; // 모바일에선 기본적으로 숨김
    if (isTablet) return 72; // 중간 사이즈 (축소형)
    return SIDEBAR_WIDTH; // 웹 (기본)
  };
  

  export const useResponsiveSidebarWidth = (): number => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
    if (isMobile) return 0;
    // if (isMedium) return 72;
    return SIDEBAR_WIDTH;
  };
  
  
