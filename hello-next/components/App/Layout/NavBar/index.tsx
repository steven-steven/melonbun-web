

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

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
});

interface IProps {
    isLoggedIn: boolean;
    handleDrawerToggle: any; 
    isDrawerOpen: boolean;
    classes: {
        appBar: string;
        appBarShift: string;
        hide: string;
        menuButton: string;
        grow: string;
    }
}
  
export const NavBar = ({classes = defaultProps.classes, isLoggedIn, handleDrawerToggle, isDrawerOpen}: IProps) => {
    return (
        <AppBar 
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: isDrawerOpen,
            })}
        >
            <Toolbar>
                <IconButton 
                    color="inherit" 
                    aria-label="Open drawer"
                    onClick={handleDrawerToggle}
                    className={classNames(classes.menuButton, isDrawerOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <div className={classes.grow}>
                    <MuiLink component={NextLink} href={'/'} variant="h6" color="inherit" underline="none">
                        MelonBun
                    </MuiLink>
                </div>
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
    }
};

export default withStyles(styles)(NavBar);