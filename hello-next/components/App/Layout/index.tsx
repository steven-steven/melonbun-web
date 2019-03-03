import AppBar from './AppBar/index'
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import classNames from 'classnames';
import {drawerWidth} from './header_constants';
import DrawerComponent from './Drawer/index';
import {connect} from 'react-redux';
import {onItemCreate} from '../../../redux/actionCreators/CardActions';

const layoutStyle = (theme:any)=> ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentSpacing: {
    padding: theme.spacing.unit * 3,
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
    contentShift: string;
    drawerHeader: string;
    contentSpacing: string;
  };
  hasTabLayout: boolean;
  onItemCreate: (newForm:any) => void;
}
interface IState {
  isDrawerOpen: boolean;
  isLoggedIn: boolean;
};

class Layout extends React.Component<IProps, IState>{
  static defaultProps = {
    hasTabLayout: false
  }

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
    const { classes, onItemCreate, hasTabLayout } = this.props;
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
            onItemCreate = {onItemCreate} 
          />
          <DrawerComponent
            show = {isDrawerOpen}
            handleDrawerToggle = {this.handleDrawerToggle}
          />
          <main 
            className={classNames(classes.content, 
              {[`${classes.contentShift}`]: isDrawerOpen},
              {[`${classes.contentSpacing}`]: !hasTabLayout}
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

const mapStateToProps = (state)=>{
  return {
    itemsBuffer: state.itemReducer.itemsBuffer
  }
}
const mapDispatchToProps = {
  onItemCreate
}
export default withStyles(layoutStyle)( connect(mapStateToProps, mapDispatchToProps)(Layout) );