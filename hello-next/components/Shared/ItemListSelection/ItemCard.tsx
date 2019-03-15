import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button, {ButtonProps} from '@material-ui/core/Button';
import {IItemInfo} from '../../../redux/dataTypes/item'
import SelectableCard from '../Selectable/selectableCard';

const cardStyle = (theme:any)=> ({
    media: {
        height: 140,
    },
});

interface IProps {
    active: boolean;
    id: IItemInfo["id"];
    title: IItemInfo["title"];
    description: IItemInfo["description"];
    classes: {
        media: string;
    }
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
}

const PostLink = (props: IProps) => {
    const {id, title, description, classes, onItemSelect, active} = props;
    return(
        <Card>
            <SelectableCard onCardSelect={onItemSelect} id={id} active={active}>
                <>
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
                </>
            </SelectableCard>
            
            <CardActions>
                <Button size="small" color="primary" component={NextLink} href={`/post?title=${id}`}>
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(cardStyle)(PostLink)
