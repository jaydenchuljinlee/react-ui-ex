import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BreadcrumbsNav from './BreadcrumbsNav';
import MainContent from './main';

const Frame = ({ children }: { children: React.ReactNode }) => (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Sidebar />
        <BreadcrumbsNav />
      <MainContent />
      <Footer />
    </Box>
  );
  
  export default Frame;
  