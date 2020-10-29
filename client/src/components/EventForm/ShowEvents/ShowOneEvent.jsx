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
    backgroundColor: "#fafafa",
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
    fontSize: "1.2rem",
    color: "grey",
    margin: ".5rem auto"
  },
  labels: {
      fontSize: ".8rem",
      fontWeight: "bolder",
      left: "0",
      textAlign: "left",
      marginBottom: ".5rem"
  },
  values: {
    fontSize: ".8rem",
    fontWeight: "lighter",
    left: "0",
    testAlign: "center",
    marginBottom: "1.5rem"
  }
});


function ShowOneEvent({eventName, startDate, endDate, address1, address2, city, state, country, zipCode, eligiblity, sponsors, theme, eventDis}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.labels} >Event Name: </Typography>
            <Typography className={classes.values} gutterBottom>
                {eventName}
            </Typography>


            <Typography className={classes.labels} >Event Schedule: </Typography>
            <Typography className={classes.values} component="h2">
                {startDate} to {endDate}
            </Typography>


            <Typography className={classes.labels} >Event address 1: </Typography>
            <Typography className={classes.values} >
                {address1}
            </Typography>


            <Typography className={classes.labels} >Event address 2: </Typography>
            <Typography className={classes.values} >
                {address2}
            </Typography>


            <Typography className={classes.values}>
                {city}, {state}, {country}, {zipCode}
            </Typography>



            <Typography className={classes.labels} >Event eligibilty: </Typography>
            <Typography className={classes.values} >
                {eligiblity}
            </Typography>


            <Typography className={classes.labels} >Event Theme: </Typography>
            <Typography className={classes.values}>
                {theme}
            </Typography>



            <Typography className={classes.labels} >Event Sponsors: </Typography>
            <Typography className={classes.values}>
                {sponsors}
            </Typography>


            <Typography className={classes.labels} >Event Discription:</Typography>
            <Typography className={classes.values} variant="body2" component="p">
                {eventDis}
            <br />
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                  size="medium"
                  variant="contained"
                  margin="1rem"
                  color="secondary"
                >
                  Register
                </Button>
            </CardActions>
        </Card>
    )
}

export default ShowOneEvent
