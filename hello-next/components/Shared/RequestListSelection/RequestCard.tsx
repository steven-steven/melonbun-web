import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import SelectableCard from '../Selectable/selectableCard';

const cardStyle = (theme:any)=> ({
    card: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        height: 200,
    },
    details:{
        display: 'flex',
        flexDirection: 'column' as 'column',
        height: 200,
    },
    flexGrow: {
        flex: '1 0 auto',
    },
    image: {
        width: 300,
    },
    controls: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit*2,
        paddingRight: theme.spacing.unit*2,
    },
    requestInfo: {
        display: 'flex',
        flexDirection: 'row' as 'row'
    }
});

interface IProps extends IRequestInfo{
    classes: {
        details: string;
        controls: string;
        image: string;
        card:string;
        flexGrow: string;
        requestInfo: string;
    }
    likedRequests?: boolean;
    isFavorite: boolean;
    onAddFavoriteRequest: (requestId:string) => void;
    onRemoveFavoriteRequest: (requestId:string) => void;
    active: boolean;
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
}

const RequestCard = (props: IProps) => {
    const {
        id, 
        date, 
        title, 
        description, 
        requesterUser, 
        fulfilled, 
        classes, 
        isFavorite, 
        onAddFavoriteRequest,
        onRemoveFavoriteRequest, 
        onItemSelect, 
        active
    } = props;
    
    const toggleFavorite = () =>{
        if(isFavorite){
            onRemoveFavoriteRequest(id);
        }else{
            onAddFavoriteRequest(id);
        }
    }
    
    return(
        <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                image="/static/images/cards/apple.jpg"
                title="Apple"
            />
            
                
            <div className={classNames(classes.details,classes.flexGrow)}>
                <SelectableCard onCardSelect={onItemSelect} id={id} active={active}>
                    <CardContent className={classes.flexGrow}>
                        <div className={classes.requestInfo}>
                            <Typography gutterBottom variant="caption" className={classes.flexGrow}>
                                Requested By: {requesterUser}
                            </Typography>
                            <Typography gutterBottom variant="caption">
                                {date}
                            </Typography>
                        </div>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </SelectableCard>
                <Divider variant="middle"/>
                <div className={classes.controls}>
                    <Typography variant="subtitle2" component="p" className={classes.flexGrow}>
                        <IconButton
                            color="inherit" 
                            aria-label="Open drawer"
                            onClick={toggleFavorite}
                        >
                            <Icon>{isFavorite?"favorite": "favorite_border"}</Icon>
                        </IconButton>
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        {fulfilled?'fulfilled':'pending'}
                    </Typography>
                </div>
            </div>
           
            
        </Card>
        
    )
}

export default withStyles(cardStyle)(RequestCard)