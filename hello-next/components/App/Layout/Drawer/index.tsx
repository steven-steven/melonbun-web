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
import {drawerWidth} from '../header_constants';
import {NextLink} from '../../../Shared/nextLink';
import Icon from '@material-ui/core/Icon';

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
    /** if drawer is show/hide */
    show: boolean;
    /** callback to open/close drawer */
    handleDrawerToggle: any;
}

const myPages = [
    {'text':'Home', 'href':'/', 'icon':'home'},
    {'text':'Chat', 'href':'#', 'icon':'chat'},
    {'text':'YourCart', 'href':'#', 'icon':'shopping_cart'},
    {'text':'Saved Items', 'href':'#', 'icon':'star'},
]
const otherPages = [
    {'text':'Post Requests', 'href':'/item'},
    {'text':'Fullfill Requests', 'href':'/item'},
    {'text':'Settings', 'href':'#'},
]

export const DrawerPanel: SFC<IProps> = ( { show, handleDrawerToggle, classes = defaultProps.classes } ) => {

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
                    {myPages.map((linkItem) => (
                        <ListItem button key={linkItem.text} component={NextLink} href={linkItem.href}>
                            <ListItemIcon>
                                <Icon>{linkItem.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={linkItem.text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {otherPages.map((linkItem) => (
                        <ListItem button key={linkItem.text} component={NextLink} href={linkItem.href}>
                            <ListItemText primary={linkItem.text} />
                        </ListItem>
                    ))}
                </List>
                    
            </Drawer>
        </>
    );
};

const defaultProps = {
    classes: {
        drawerHeader: '',
        drawerPaper: '',
        drawer: '',
    }
};

export default withStyles(drawerStyle)(DrawerPanel);
