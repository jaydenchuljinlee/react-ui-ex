import { Drawer, useMediaQuery, IconButton, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useResponsiveSidebarWidth } from './constants/layout';

const Sidebar2 = () => {
  const theme = useTheme();
  // const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = useResponsiveSidebarWidth();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            bottom: 80,         // 푸터 위에 띄우기 (푸터 높이에 따라 조절 가능)
            right: 16,          // 오른쪽 하단에 위치
            zIndex: 1300,
            bgcolor: 'primary.main',
            color: '#fff',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* 데스크탑/태블릿용 Drawer */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={isMobile ? mobileOpen : true}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: isMobile ? '100%' : sidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMobile ? '100%' : sidebarWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {/* 메뉴 항목 예시 */}
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} component="div">
                <ListItemButton>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
        </List>
        </List>
      </Drawer>
    </>
  );

};

export default Sidebar2;
