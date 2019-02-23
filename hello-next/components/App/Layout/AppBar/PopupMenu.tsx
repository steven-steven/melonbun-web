import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

interface IProps {
    anchorEl: any;
}
interface IState {
    isMenuOpen: boolean
}

class PopupMenu extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {isMenuOpen: false};
    }

    handleMenuToggle = ()=>{
        this.setState((prevState:IState)=> {
            return {isMenuOpen : !prevState.isMenuOpen};
        })
    }

    renderMenu = ()=>{
        const {anchorEl} = this.props;
        const {isMenuOpen} = this.state;

        return(
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={this.handleMenuToggle}
            >
                <MenuItem onClick={this.handleMenuToggle}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuToggle}>My account</MenuItem>
            </Menu>
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
                >
                    <AccountCircle />
                </IconButton>
                {this.renderMenu}
            </div>
        )
    };
}

export default PopupMenu