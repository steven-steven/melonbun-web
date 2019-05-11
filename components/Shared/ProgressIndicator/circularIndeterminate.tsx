import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
    /** Indicate if loading indicator is displaying */
    show: boolean;
    /** Injected from MUI withStyle */
    classes: {
        progress: string;
        container: string;
    }
}

const styles = theme => ({
    container: {
        textAlign:'center' as 'center', //cast to literal type due to Typescript's type widening error
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

export const CircularIndeterminate = (props: IProps) => {
    const { classes = defaultProps.classes, show } = props;
    return show ? (
        <div className={classes.container}>
            <CircularProgress className={classes.progress} />
        </div>
    ):null;
}

const defaultProps = {
    classes: {
        progress: '',
        container: ''
    }
};

export default withStyles(styles)(CircularIndeterminate);
