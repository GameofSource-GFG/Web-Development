import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    margin: ".5rem auto"
  },
  small: {
    fontSize: ".8rem",
    color: "grey",
  },
  body: {
    fontSize: ".7rem",
    color: "grey",
    margin: ".5rem auto"
  }
});


function EventCard(props) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} gutterBottom>
            {props.eventName}
            </Typography>
            <Typography className={classes.small} component="h2">
            {props.startDate}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {props.eligiblity}
            </Typography>
            <Typography className={classes.body} variant="body2" component="p">
            {props.eventDis}
            <br />
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default EventCard
