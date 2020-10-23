import { Card, CardHeader, makeStyles, Avatar, IconButton, CardMedia, Typography, CardContent, CardActions, Checkbox, TextField } from '@material-ui/core'
import { Favorite, FavoriteBorder, Telegram } from '@material-ui/icons'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import React from 'react'
import pic from "./screens/images(1).jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        boxShadow: " 0 0 2px #a0a0a0",
        margin: "0 auto",
        borderRadius: 10,
        marginBottom: 50
    },
    avatar: {
        backgroundColor: "red"
    },
    pic: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}))

function PostCard() {

    const classes = useStyles()
    return (
        <div>
            <Card  className={classes.root} elevation={0}>
                <CardHeader 
                    avatar={
                       <Avatar className={classes.avatar}>S</Avatar> 
                    }
                    title="sachin som"
                    subheader="26 september 2020"
                    action={
                        <IconButton >
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardMedia 
                    title="sachin som"
                    image={pic}
                    className={classes.pic}
                />

                <CardContent >
                    <Typography component="p" color="textSecondary">This is an awesone pic </Typography>
                </CardContent>
                <CardActions >
                    <IconButton >
                        <Checkbox color="secondary" value="first" icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox>
                    </IconButton>
                    <form>
                        <TextField variant="standard" label="comment" size="small" name="comment" id="comment"/>
                        <IconButton type="submit">
                            <Telegram fontSize="small" variant="outlined"/>
                        </IconButton>
                    </form>
                </CardActions>
            </Card>
        </div>
    )
}

export default PostCard
