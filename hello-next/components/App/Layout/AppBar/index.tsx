import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import PopupMenu from './PopupMenu';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import {drawerWidth} from '../header_constants';

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
    menuButton: {
      marginLeft: 12,
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
    }
}
const HomeBody = ({classes, isLoggedIn, handleDrawerToggle, isDrawerOpen}: IProps) => {
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
                <Typography variant="h6" color="inherit">
                    MelonBun
                </Typography>
                {!isLoggedIn && (<PopupMenu anchorEl={'left'}/>) }
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(HomeBody)