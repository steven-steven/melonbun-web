

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import SearchBar from '../../../Shared/SearchBar';
import PopupMenu from './PopupMenu';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import {drawerWidth} from '../header_constants';
import MuiLink from '@material-ui/core/Link';
import {NextLink} from '../../../Shared/nextLink';

const styles = (theme:any)=> ({
    root: {
      display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 80,
        boxShadow: "none"
    },
    toolBar: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    avatar: {
        margin: 10,
        width: 50,
        height: 50,
    },
});

interface IProps {
    /** the current user is logged in */
    isLoggedIn: boolean;
    /** callback to open/close drawer */
    handleDrawerToggle: any;
    /** Drawer is open/close state */
    isDrawerOpen: boolean;
    classes: {
        appBar: string;
        appBarShift: string;
        hide: string;
        menuButton: string;
        grow: string;
        toolBar: string;
        avatar: string;
    }
}
  
export const NavBar = ({classes = defaultProps.classes, isLoggedIn, handleDrawerToggle, isDrawerOpen}: IProps) => {
    return (
        <AppBar 
            position="absolute"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: isDrawerOpen,
            })}
        >
            <Toolbar className={classes.toolBar}>
                <IconButton 
                    color="inherit" 
                    aria-label="Open drawer"
                    onClick={handleDrawerToggle}
                    className={classNames(classes.menuButton, isDrawerOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <div className={classes.grow}/>
                <Avatar alt="logo" src="/static/images/logo.png" className={classes.avatar} />
                <MuiLink component={NextLink} href={'/'} variant="h6" color="inherit" underline="none">
                    MelonBun
                </MuiLink>
                <SearchBar/>
                <div className={classes.grow}/>
                {!isLoggedIn && (<PopupMenu/>) }
            </Toolbar>
        </AppBar>
    )
}

const defaultProps = {
    classes: {
        appBar: '',
        appBarShift: '',
        hide: '',
        menuButton: '',
        grow: '',
        toolBar: '',
        avatar: '',
    }
};

export default withStyles(styles)(NavBar);