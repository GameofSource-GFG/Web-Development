import React from 'react'
import PostCard from '../PostCard'
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        Width: "100%",
        margin: "0",
        // padding:"1vh 20vh 0 20vh",
        backgroundColor: "#f8f8f8",
        justifyContent: "center"
    },
    item: {
        padding:" 0"
    }
})

function Home() {
    const matches = useMediaQuery('(min-width: 700px')
    const classes = useStyle()
    return (
        <div>
        <Grid container  className={classes.root} justify="center" alignItems="center" style={{padding: `${matches ? "1vh 20vh 0 20vh": "0"}`}}>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            <Grid item xs={12} className={classes.item}>
                <PostCard />
            </Grid>
            
        </Grid>
        </div>
    )
}

export default Home
