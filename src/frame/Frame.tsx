import { useEffect, useRef, useState } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import BreadcrumbsNav from './BreadcrumbsNav';
import MainContent from './Main';
import Footer from './Footer';



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
            <Sidebar />
            {/* <Box component="aside" sx={{ width: sidebarWidth, flexShrink: 0 }}>
                
            </Box> */}
            <Header/>
            <BreadcrumbsNav />
            <MainContent />
            <Footer />
        </Box>
    )
};
  
  export default Frame;
  