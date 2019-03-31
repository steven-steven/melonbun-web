import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import AccountCircle from '@material-ui/icons/AccountCircle';

interface IProps {
    
}
interface IState {
    isMenuOpen: boolean
}

class PopupMenu extends Component<IProps, IState>{
    private anchorEl: HTMLElement|null;
    private setAnchorElRef: (element:any) => void;
    constructor(props: IProps) {
        super(props);
        this.state = {isMenuOpen: false};
        this.anchorEl = null;
        this.setAnchorElRef = element => {
            this.anchorEl = element;
        }
    }

    handleMenuToggle = ()=>{
        this.setState((prevState:IState)=> {
            return {isMenuOpen : !prevState.isMenuOpen};
        })
    }

    handleMenuClose = (event:React.ChangeEvent<{}>) => {
        if (this.anchorEl && this.anchorEl.contains(event.target as Node)) {
            return;
        }

        this.setState({ isMenuOpen: false });
    };

    renderMenu = ()=>{
        const {isMenuOpen} = this.state;
        
        return(
            <Popper open={isMenuOpen} anchorEl={this.anchorEl as HTMLElement} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleMenuClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        );
    }

    render(){
        const {isMenuOpen} = this.state;
        return (
        
            <div>
                <IconButton
                    aria-owns={isMenuOpen ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    color="inherit"
                    buttonRef={this.setAnchorElRef}
                    onClick={this.handleMenuToggle}
                >
                    <AccountCircle />
                </IconButton>
                {this.renderMenu()}
            </div>
        )
    };
}

export default PopupMenu
