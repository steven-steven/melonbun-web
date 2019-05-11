import React, {Component} from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

interface IProps {
    /** callback to pass selected card ref back when item selected */
    onCardSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
    /** id of card info */
    id: string;
    classes:{
        focusHighlight: string;
    }
    /** indicate if this card is selected */
    active: boolean;
}

interface IState {
    
}

const selectStyle = (theme:any)=> ({
    focusHighlight: {
        backgroundColor: theme.palette.secondary.main,
    },
});

export class SelectableCard extends Component<IProps, IState> {
    
    private cardRef = React.createRef<HTMLButtonElement>();

    constructor(props: IProps) {
        super(props);
    }

    render(){
        const {onCardSelect, id, children, classes = defaultProps.classes, active} = this.props;

        return (
            <CardActionArea className={classNames(active && classes.focusHighlight)} id={id} buttonRef={this.cardRef} onFocus={()=>{onCardSelect(this.cardRef)}}>
                {children}
            </CardActionArea>
        )
    }
}

const defaultProps = {
    classes:{
        focusHighlight: ''
    }
};

export default withStyles(selectStyle)(SelectableCard);
