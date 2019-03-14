import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';



interface IProps {
    onCardSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
    id: string; //card info
    classes:{
        focusHighlight: string;
    }
    active: boolean;
}

interface IState {
    
}

const selectStyle = (theme:any)=> ({
    focusHighlight: {
        backgroundColor: 'yellow',
    },
});

class SelectableCard extends React.Component<IProps, IState> {
    
    private cardRef = React.createRef<HTMLButtonElement>();

    constructor(props: IProps) {
        super(props);
    }

    render(){
        const {onCardSelect, id, children, classes, active} = this.props;

        return (
            <Card>
            
                <CardActionArea className={classNames(active && classes.focusHighlight)} id={id} buttonRef={this.cardRef} onClick={()=>{onCardSelect(this.cardRef)}}>
                    {children}
                </CardActionArea>
            
            </Card>
        )
    }
}

export default withStyles(selectStyle)(SelectableCard)
