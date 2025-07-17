import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem component="div">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component="div">
        <ListItemText primary="About" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
