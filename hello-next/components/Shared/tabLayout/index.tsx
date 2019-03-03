import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer';
import Icon from '@material-ui/core/Icon';

const TabLayoutStyle = (theme:any)=> ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

export interface ITabContent
{
    title: string, 
    content: React.ReactNode,
    icon?: string
}

export interface ITabLayoutProps {
    classes: {
        root: string;   
    };
    tabContentList: ITabContent[];
}

interface IState {
    tabValue: number;
}

class TabLayout extends React.Component<ITabLayoutProps, IState>{
    
    constructor(props: ITabLayoutProps) {
        super(props);
        this.state = {
            tabValue: 0,
        };
    }
    
    handleChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    render(){
        const {tabValue} = this.state;
        const {tabContentList, classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={tabValue} onChange={this.handleChange} centered>
                        {tabContentList.map((tabItem, index) => {
                            const icon = tabItem.icon? <Icon>{tabItem.icon}</Icon> : '';
                            return( <Tab icon={icon} label={`${tabItem.title}`} /> )
                        })}
                    </Tabs>
                </AppBar>
                <TabContainer>{tabContentList[tabValue].content}</TabContainer>
            </div>
        );
    }
}

export default withStyles(TabLayoutStyle)(TabLayout)