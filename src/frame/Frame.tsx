import { useEffect, useRef, useState } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BreadcrumbsNav from './BreadcrumbsNav';
import MainContent from './main';

const Frame = ({ children }: { children: React.ReactNode }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    
    useEffect(() => {
        if (sidebarRef.current) {
            const resizeObserver = new ResizeObserver(() => {
            setSidebarWidth(sidebarRef.current?.offsetWidth || 0);
            });

            resizeObserver.observe(sidebarRef.current);

            console.log(sidebarWidth);
            return () => resizeObserver.disconnect();
        }
    }, []);
    

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <Drawer ref={sidebarRef} variant="permanent" anchor="left" sx={{ width: sidebarWidth, flexShrink: 0 }}>
                <Sidebar  />
            </Drawer>
            {/* <Box component="aside" sx={{ width: sidebarWidth, flexShrink: 0 }}>
                
            </Box> */}
            <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                <Box component="header">
                    <Header/>
                </Box>
                
                
                {/* <Box sx={{ display: 'flex', flex: 1 }}>
                    <BreadcrumbsNav />
                    <MainContent />
                </Box> */}
                <Footer />
            </Box>
        
        </Box>
    )
};
  
  export default Frame;
  