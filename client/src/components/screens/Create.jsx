import React from 'react'
import {makeStyles, Container, Typography, TextField, Button} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: theme.spacing(8)
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(2)
    },
    input: {
        margin: "3vh 0"
    }
    
}))

function Create() {
    const classes = useStyles()
    return (
        <>
            <Container maxWidth="xs" disableGutters={true} component="main">
                <div className={classes.paper}>
                    <Typography component="h1" varient="h2">Create Post</Typography>
                    <form className={classes.form}>
                        <TextField 
                            fullWidth
                            type="file"
                            
                            size="medium"
                            id="photo"
                            name="photo"
                            className={classes.input}
                            variant="outlined"
                            
                        />
                        <TextField 
                            fullWidth
                            label="Title"
                            size="medium"
                            id="title"
                            name="title"
                            type="text"
                            margin="dense"
                            className={classes.input}
                            variant="outlined"
                        />
                        
                        <TextField 
                            fullWidth
                            label="Discription"
                            size="medium"
                            id="body"
                            name="body"
                            type="text"
                            multiline={true}
                            rows="10"
                            variant="outlined"
                            margin="dense"
                            className={classes.input}
                        />
                        
                        <Button 
                            type="submit"
                            color="primary"
                            size="medium"
                            variant="contained"
                        >
                            Create Post
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Create
