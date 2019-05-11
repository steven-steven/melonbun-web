import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

const SearchStyle = (theme:any)=> ({
    
    search: {
        position: 'relative' as 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute' as 'absolute',
        pointerEvents: 'none' as 'none',
        display: 'flex' as 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
});

export interface ISearchBarProps {
    classes: {
        search: string;
        searchIcon: string;
        inputRoot: string;
        inputInput: string;
    };
}

export const SearchBar = (props: ISearchBarProps) => {
    const {classes = defaultProps.classes} = props;
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    );
}

const defaultProps = {
    classes:{
        search: '',
        searchIcon: '',
        inputRoot: '',
        inputInput: ''
    },
};

export default withStyles(SearchStyle)(SearchBar);