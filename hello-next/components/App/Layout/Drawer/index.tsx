import {SFC} from 'react'

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Delete from '@material-ui/icons/Delete';
import {drawerWidth} from '../header_constants';

const drawerStyle = (theme:any)=> ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
});

interface IProps {
    classes: {
        drawerHeader: string;
        drawerPaper: string;
        drawer: string;
    };
    show: boolean;
    handleDrawerToggle: any;
}

const DrawerPanel: SFC<IProps> = ( { show, handleDrawerToggle, classes } ) => {

    return(
        <>
            <Drawer
                variant="persistent"
                open={show}
                onClose={handleDrawerToggle}
                className={classes.drawer}
                classes={{
                    paper:classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerToggle}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Home', 'Chat', 'Your Cart', 'Saved Items'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <Delete/>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Post Requests', 'Fulfill Requests', 'Settings'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                    
            </Drawer>
        </>
    );
};

export default withStyles(drawerStyle)(DrawerPanel);