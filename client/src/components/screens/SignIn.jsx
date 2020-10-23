import React from 'react'
import { TextField, Grid, makeStyles, Container, Typography, Button, CssBaseline } from '@material-ui/core'
// import  LooksOutlinedIcon  from '@material-ui/icons/LooksOutlined'
import {Link, useHistory} from "react-router-dom"
import {useFormik} from 'formik'

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
    },
    paper: {
        display: "flex", 
        flexDirection: "column",
        marginTop: theme.spacing(8),
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    btn: {
        margin: theme.spacing(3, 0, 2)
    },
    link: {
        textDecoration: "none",
        color: "blue"
    },
    logo: {
        fontFamily: "Brush Script MT, Brush Script Std, cursive"
    }
}))

function SignIn() {
    const classes = useStyles()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async values => {
            try{
                const res = await fetch("/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                const resData = await res.json()
                if(resData.errors){
                    // need to find a method to represent these errors to frontend
                    return console.log("422 errors",resData)
                }
                else{
                    history.push("/")
                }
            }
            catch(err){
                console.log(err)
            }
        },
        validate: values=> {
            let errors = {}
            if(!values.email){
                errors.email = "Email is Required"
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email is not valid"
            }
            else if(!values.password){
                errors.password = "Password is Required"
            }
            else if(values.password.length < 6){
                errors.password = "Password length is alteast 6 charachters"
            }
            return errors
        }
    })
    return (
        <div>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar} size="large">
                        <LooksOutlinedIcon />
                    </Avatar> */}
                    <Typography variant="h4" component="h1" className={classes.logo} >
                        SocialBuddy
                    </Typography>
                    <form  className={classes.form} onSubmit={formik.handleSubmit}>
                        <TextField 
                            variant="outlined"
                            label="email"
                            name="email"
                            fullWidth
                            id="email"
                            autoComplete="email"
                            type="text"
                            margin="normal"
                            value={formik.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={(formik.touched && formik.errors.email) ? true : false}
                            helperText={(formik.touched && formik.errors.email) ? formik.errors.email : ""}
                        />
                        <TextField 
                            variant="outlined"
                            label="password"
                            fullWidth
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            type="password"
                            margin="normal"
                            value={formik.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={(formik.touched && formik.errors.password) ? true : false}
                            helperText={(formik.touched && formik.errors.password) ? formik.errors.password : ""}
                        />
                        <Button
                            color="primary"
                            fullWidth
                            variant="contained"
                            type="submit"
                            className={classes.btn}
                            size="large"
                        >
                            SignIn
                        </Button>
                        <Grid container >
                            <Grid item xs={12} sm={6} lg={6} >
                                <Link to="" variant="body2" color="inherit" className={classes.link}>
                                    Forgot password ?
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <Link to="/signup" variant="body2" color="primary" className={classes.link}>
                                   Don't have an account ?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </div>
    )
}

export default SignIn
