import NavBar from './NavBar'
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import React, {Component} from 'react';
import classNames from 'classnames';
import {drawerWidth} from './header_constants';
import DrawerComponent from './Drawer';
import Toasts from '../../Shared/Toasts';
import {connect} from 'react-redux';
import {toastClear} from '../../../redux/actioncreators/notificationActions';

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
  /** indicate id Layout's children contains tabLayout component. Used to adjust spacing accordingly */
  hasTabLayout: boolean;
}

interface StateProps {
  toast: any;
}
     
interface DispatchProps {
  toastClear: ()=> void;
}
type Props = StateProps & DispatchProps & IProps

interface IState {
  isDrawerOpen: boolean;
  isLoggedIn: boolean;
};

export class Layout extends Component<Props, IState>{
  static defaultProps = {
    toastClear: ()=>{},
    toast:{
      open: false,
      message: ""
    },
    hasTabLayout: false,
    classes: {
      root: '',
      content: '',
      contentShift: '',
      drawerHeader: '',
      contentSpacing: ''
    }
  }

  constructor(props: Props) {
    super(props);
    this.state = {isDrawerOpen: false, isLoggedIn: false};
  }

  handleDrawerToggle = ()=>{
    this.setState((prevState:IState)=>{
      return {isDrawerOpen : !prevState.isDrawerOpen};
    })
  }
  
  render() {
    const { classes, hasTabLayout } = this.props;
    const { isDrawerOpen ,isLoggedIn } = this.state;

    return (
      <>
        <Head>
              <title>MelonBun</title>
        </Head>
        <div className={classes.root}>
          <NavBar
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
              {[`${classes.contentShift}`]: isDrawerOpen},
              {[`${classes.contentSpacing}`]: !hasTabLayout}
            )}
          >
            <div className={classes.drawerHeader} />
            {this.props.children}
          </main>
          <Toasts 
            {...this.props.toast}
            onRequestClose={this.props.toastClear.bind(this)}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state):StateProps =>{
  return {
    toast: state.notificationReducer.toast
  }
}
const mapDispatchToProps:DispatchProps = {
  toastClear
}

export const SLayout = withStyles(layoutStyle)(Layout)
export default connect(mapStateToProps, mapDispatchToProps)(SLayout);