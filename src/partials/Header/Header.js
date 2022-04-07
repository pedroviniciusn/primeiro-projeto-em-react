import React, { useState }from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer, 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'

import { useNavigate } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./Header.style";

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    const handleMenuClickHome = () => {
        handleToggleMenu()
        navigate("/home")
    }
    const handleMenuClickCustomers = () => {
        handleToggleMenu()
        navigate("/customers")
    }

    const handleMenuClickCustomersAdd = () => {
        handleToggleMenu()
        navigate("/customers/add")
    }


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleToggleMenu()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
        </AppBar>
        <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
            <List>
                <ListItem button onClick={() => handleMenuClickHome()}> 
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClickCustomers()}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Lista de clientes</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClickCustomersAdd()}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText>Cadastro de clientes</ListItemText>
                </ListItem>
            </List>
        </Drawer>        
        </>
    )
}

export default Header 