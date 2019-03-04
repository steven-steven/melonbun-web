import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea, {CardActionAreaProps} from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import Icon from '@material-ui/core/Icon';


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
    onItemDelete?: (id:any) => void;
    likedRequests?: boolean;
}

//attach prop:hrefAs to existing CardActionAreaProps
interface linkedCardActionAreaProps extends CardActionAreaProps{
    hrefAs?:string
}
const LinkedCardActionArea: React.ReactType<linkedCardActionAreaProps> = CardActionArea;

const PostLink = (props: IProps) => {
    const {id, date, title, description, requesterUser, fulfilled, classes, likedRequests=false, onItemDelete} = props;
    return(
        <Card className={classes.card}>
            <CardMedia
                    className={classes.image}
                    image="/static/images/cards/apple.jpg"
                    title="Apple"
                />
            <LinkedCardActionArea component={NextLink} hrefAs={`/p/${id}`} href={`/post?title=${title}`}>
                
                <div className={classes.details}>
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
                    <Divider variant="middle"/>
                    <div className={classes.controls}>
                        <Typography variant="subtitle2" component="p" className={classes.flexGrow}>
                            <Icon>{likedRequests?"favorite": "favorite_border"}</Icon>
                        </Typography>
                        <Typography variant="subtitle2" component="p">
                            {fulfilled?'fulfilled':'pending'}
                        </Typography>
                    </div>
                </div>
            </LinkedCardActionArea>
            
        </Card>
        
    )
}

export default withStyles(cardStyle)(PostLink)