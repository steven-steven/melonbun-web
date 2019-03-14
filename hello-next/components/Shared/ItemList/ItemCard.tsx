import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea, {CardActionAreaProps} from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';


const cardStyle = (theme:any)=> ({
    card: {
        width: 280,
    },
    media: {
        height: 140,
    },
});

interface IProps {
    id: string;
    title: string;
    description: string;
    classes: {
        card: string;
        media: string;
    }
    onItemDelete?: (id:any) => void;
}

//attach prop:hrefAs to existing CardActionAreaProps
interface linkedCardActionAreaProps extends CardActionAreaProps{
    hrefAs?:string
}
const LinkedCardActionArea: React.ReactType<linkedCardActionAreaProps> = CardActionArea;

const PostLink = (props: IProps) => {
    const {id, title, description, classes, onItemDelete} = props;
    return(
        <Card className={classes.card}>
            
            <LinkedCardActionArea component={NextLink} hrefAs={`/p/${id}`} href={`/post?title=${title}`}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/apple.jpg"
                    title="Apple"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
            </LinkedCardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                {
                    onItemDelete && 
                    (<IconButton onClick={()=> onItemDelete(id)}>
                        <Delete/>
                    </IconButton>)
                }
            </CardActions>
            
        </Card>
        
    )
}

export default withStyles(cardStyle)(PostLink)