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
import {NextLink} from '../../../Shared/nextLink';

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

const myPages = [
    {'text':'Home', 'href':'#'},
    {'text':'Chat', 'href':'#'},
    {'text':'YourCart', 'href':'#'},
    {'text':'Saved Items', 'href':'#'},
]
const otherPages = [
    {'text':'Post Requests', 'href':'#'},
    {'text':'Fulill Requests', 'href':'/request'},
    {'text':'Settings', 'href':'#'},
]
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
                    {myPages.map((linkItem, index) => (
                        <ListItem button key={linkItem.text} component={NextLink} href={linkItem.href}>
                            <ListItemIcon>
                                <Delete/>
                            </ListItemIcon>
                            <ListItemText primary={linkItem.text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {otherPages.map((linkItem, index) => (
                        <ListItem button key={linkItem.text} component={NextLink} href={linkItem.href}>
                            <ListItemText primary={linkItem.text} />
                        </ListItem>
                    ))}
                </List>
                    
            </Drawer>
        </>
    );
};

export default withStyles(drawerStyle)(DrawerPanel);