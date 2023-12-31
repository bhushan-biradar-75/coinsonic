import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { history } from '../history';
// import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  // const style = () => {
   const IconTextColor = {
      color:"white",
    }

  const listItemButtonStyle = {
      '&:hover': {
        backgroundColor: '#018dfa', // Set your desired hover color here
      },
    };
  // }

  const navigator = useNavigate()

  const handleDrawerOpen = () => {
    console.log("111")
    setOpen(true);
  };

  const handleDrawerClose = () => {
    console.log("222")
  };

  const handleDrawerClose11 = (d) => {
    navigator('/news')
  };

  return (
    <Box sx={{ display: 'flex'}}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}> */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography sx={{color:"black"}} variant="h5" noWrap component="div">
              Global Crypto Stats
            </Typography>
        </Toolbar>
      {/* </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor : "#001528"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose11}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        {/* Home */}
        <List>
            <ListItem disablePadding>
              <ListItemButton sx={listItemButtonStyle}>
                <ListItemIcon>
                  <InboxIcon sx={IconTextColor} />
                </ListItemIcon>
                <ListItemText sx={IconTextColor} primary={"Home"} onClick={() => { navigator("/") }}/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>

        {/* Cryptocurrency */}
        <List>
            <ListItem disablePadding>
              <ListItemButton sx={listItemButtonStyle}>
                <ListItemIcon>
                  <InboxIcon  sx={IconTextColor}/>
                </ListItemIcon>
                <ListItemText sx={IconTextColor} primary={"Cryptocurrency"}  onClick={() => { navigator("/crypto") }}/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>

        {/* Exchange */}
        <List>
            <ListItem disablePadding>
              <ListItemButton sx={listItemButtonStyle}>
                <ListItemIcon>
                  <InboxIcon sx={IconTextColor}/>
                </ListItemIcon>
                <ListItemText sx={IconTextColor} primary={"Exchange"}  onClick={() => { navigator("/exchange")}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>

        {/* News */}
        <List>
            <ListItem disablePadding>
              <ListItemButton sx={listItemButtonStyle}>
                <ListItemIcon>
                  <InboxIcon sx={IconTextColor}/>
                </ListItemIcon>
                <ListItemText sx={IconTextColor} primary={"News"}  onClick={() => { navigator("/news")}}/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider/>


      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Hello coinsonic
        </Typography>
        <Typography paragraph>
        </Typography>
      </Main> */}
    </Box>
  );
}