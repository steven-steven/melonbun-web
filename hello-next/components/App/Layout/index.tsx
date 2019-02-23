import AppBar from './AppBar/index'
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import classNames from 'classnames';
import {drawerWidth} from './header_constants';
import DrawerComponent from './Drawer/index';

const layoutStyle = (theme:any)=> ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

interface IProps {
  classes: {
    root: string;
    content: string;
    contentShift: String;
    drawerHeader: string;
  };
}
interface IState {
  isDrawerOpen: boolean;
  isLoggedIn: boolean;
};

class Layout extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {isDrawerOpen: false, isLoggedIn: false};
  }

  handleDrawerToggle = ()=>{
    console.log("toggleDrawer");
    this.setState((prevState:IState)=>{
      return {isDrawerOpen : !prevState.isDrawerOpen};
    })
  }
  
  render() {
    const { classes } = this.props;
    const { isDrawerOpen ,isLoggedIn } = this.state;

    return (
      <>
        <Head>
              <title>My page title</title>
        </Head>
        <div className={classes.root}>
          <AppBar 
            handleDrawerToggle = {this.handleDrawerToggle}
            isDrawerOpen = {isDrawerOpen}
            isLoggedIn = {isLoggedIn}  
          />
          <DrawerComponent
            show = {isDrawerOpen}
            handleDrawerToggle = {this.handleDrawerToggle}
          />
          <main 
            className={classNames(classes.content, 
              {[`${classes.contentShift}`]: isDrawerOpen}
            )}
          >
            <div className={classes.drawerHeader} />
            {this.props.children}
          </main>
        </div>
      </>
    )
  }
}

export default withStyles(layoutStyle)(Layout);