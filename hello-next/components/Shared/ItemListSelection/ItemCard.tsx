import { withStyles } from '@material-ui/core/styles';
import {NextLink} from '../nextLink'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {IItemInfo} from '../../../redux/dataTypes/item'
import SelectableCard from '../Selectable/selectableCard';

const cardStyle = (theme:any)=> ({
    media: {
        height: 140,
    },
});

interface IProps {
    /** Indicate if ItemCard is selected */
    active: boolean;
    /** Unique id of item shown */
    id: IItemInfo["id"];
    /** Title of Item */
    title: IItemInfo["title"];
    /** Description of Item */
    description: IItemInfo["description"];
    /** Injected from MUI withStyle */
    classes: {
        media: string;
    }
    /** Callback that passes the SelectableCard ref back to selectableContainerHOC */
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
}

export const ItemCard = (props: IProps) => {
    const {id, title, description, classes = defaultProps.classes, onItemSelect, active} = props;
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

const defaultProps = {
    classes: {
        media: ''
    }
};

export default withStyles(cardStyle)(ItemCard);
