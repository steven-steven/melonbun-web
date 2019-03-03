import Typography from '@material-ui/core/Typography';

export default function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        <Typography>
            A Tab
        </Typography>
        {props.children}
      </Typography>
    );
  }