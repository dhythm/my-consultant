import { HEIGHT_NAVBAR } from '@core/lib/constants';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
}

const NavBar: React.FunctionComponent<Props> = ({ title }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderHamburgerMenu = (
    <div style={{ position: 'fixed' }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((v, i) => (
          <MenuItem
            key={i}
            onClick={() => {
              handleMenuClose();
              navigate(v.path);
            }}
          >
            {v.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );

  return (
    <AppBar
      position="fixed"
      style={{ height: HEIGHT_NAVBAR, justifyContent: 'center' }}
    >
      <Toolbar>
        {renderHamburgerMenu}
        <Box flexGrow={1}>
          <Typography align="center" variant="h6">
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const menuItems = [
  { label: '相談する', path: '/life-nav' },
  { label: '相談一覧', path: '/consulting' },
  { label: '営業員向け', path: '/problems' },
];

export default NavBar;
