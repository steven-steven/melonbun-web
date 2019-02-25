import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button, {ButtonProps} from '@material-ui/core/Button';

const cardStyle = (theme:any)=> ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 140,
    },
});

interface IProps {
    key: number,
    id: number,
    title: string;
    classes: {
        card: string;
        media:string;
    }
}

interface linkedButtonProps extends ButtonProps{
    hrefAs?:string
}
const LinkedButton: React.ReactType<linkedButtonProps> = Button;

const PostLink = (props: IProps) => {
    const {key, id, title, classes} = props;
    return(
        <Card key={key} className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/apple.jpg"
                    title="Apple"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <LinkedButton component={NextLink} hrefAs={`/p/${id}`} href={`/post?title=${title}`} size="small">Learn More</LinkedButton>
            </CardActions>
        </Card>
        
    )
}

export default withStyles(cardStyle)(PostLink)