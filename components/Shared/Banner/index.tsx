import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const PageBannerStyle = (theme:any)=> ({
    banner:{
        backgroundColor: '#CD773B',
        width: '100%'
    },
    bannerContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
});

export interface IBannerProps {
    classes: {
        banner: string;
        bannerContent: string; 
    };
    /** Text Description displayed on banner */
    description: string;
    /** Title displayed on banner */
    title: string;
}

export const PageBanner = (props: IBannerProps) => {
    const {description, title, classes = defaultProps.classes} = props;
    return (
        <div className={classes.banner}>
            <div className={classes.bannerContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" component="p">
                    {description}
                </Typography>
            </div>
        </div>
    );
}

const defaultProps = {
    classes:{
        banner: '',
        bannerContent: ''
    },
};

export default withStyles(PageBannerStyle)(PageBanner);