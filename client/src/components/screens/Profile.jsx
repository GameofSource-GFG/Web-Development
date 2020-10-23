import React from 'react'
import { Paper, makeStyles, Grid, Avatar, Typography} from '@material-ui/core'
import pic from "./images(1).jpg"

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa"
    },
    wrapper: {
        maxWidth: "80vh",
        height: "100%",
        margin: "auto",
    },
    wrapperUpper: {
        width: "100%",
        height: "40vh",
        // paddingTop: "3em",
        borderBottom: "1px solid black",
        boxSizing: "content-box"
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: "0 auto",
    },
    word: {
        fontSize: "1rem",
        fontWeight: "bolder",
        textAlign: "center"
    },
    pic: {
        maxWidth: "100%",
        maxHeight: "100%"
        
    }
}))

function Profile() {
    const classes = useStyles()
    return (
        <div>
            <Paper elevation={0} className={classes.paper} >
                <Grid container component="main" className={classes.wrapper}>
                    <Grid container className={classes.wrapperUpper} alignItems="center">
                        <Grid item xs={12} sm={4} style={{height: "20vh", display: "flex", alignItems: "center"}} ><Avatar varient="circle" alt="sachiin som" className={classes.large}></Avatar></Grid>
                        <Grid container xs={12} sm={8} item spacing={3} style={{height: "20vh", display: "flex", alignItems: "center"}}>
                            <Grid container direction="column" xs={4} item>
                                <Grid item><Typography className={classes.word}>Posts</Typography></Grid>
                                <Grid item><Typography className={classes.word}>30</Typography></Grid>
                            </Grid>
                            <Grid container direction="column" xs={4} item>
                                <Grid item><Typography className={classes.word}>Followers</Typography></Grid>
                                <Grid item><Typography className={classes.word}>34</Typography></Grid>
                            </Grid>
                            <Grid container direction="column" xs={4} item>
                                <Grid item><Typography className={classes.word}>Following</Typography></Grid>
                                <Grid item><Typography className={classes.word}>345</Typography></Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid container  style={{height: "20vh"}}>
                            <Grid item xs={12} style={{height: "5vh"}}><Typography varient="h5" component="h1">Sachin</Typography></Grid>
                            <Grid item xs={12} style={{height: "15vh"}}><Typography varient="h5" component="h1">Hi i as sachin som</Typography></Grid>
                        </Grid> */}
                    </Grid>

                    {/* grid for posts */}
                    <Grid container spacing={3} justify="space-around" style={{margin: " 0 auto"}}>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic} /></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                        <Grid item xs={6} md={4} ><img src={pic} alt="wait" className={classes.pic}/></Grid>
                    </Grid>
                </Grid>
            </Paper>         
        </div>
    )
}

export default Profile
