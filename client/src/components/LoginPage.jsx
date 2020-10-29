import React from 'react'
import { TextField, Grid, makeStyles, Container, Button, CssBaseline } from '@material-ui/core'
import {useFormik} from 'formik'

const useStyles = makeStyles((theme) => ({
    root: {
        height: "70vh",
        borderRadius: "2rem",
        marginTop: "3rem",
        paddingTop: ".3em",
        backgroundColor: "#f8f8f8"
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
        color: "green"
    },
    logo: {
        margin: 0,
        color: "green",
        display: "flex",
        justifyContent: "Center",
        alignItems: "center",
        flexDirection: "column",
    },
    logoh1tag: {
        color: "green",
        margin: "0",
        fontWeight: "bolder"
    }

}))

function LoginPage() {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async values => {
            console.log(values)
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
        <div >
            <Container component="main" maxWidth="xs" className={classes.root}>
                <CssBaseline />
                <div className={classes.paper}>
                    <div className={classes.logo}>
                        <h1 className={classes.logoh1tag}>GFG</h1>
                        <small>Student Chapter</small>
                        <h2>Login/SignIn</h2>
                    </div>
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
                            color="secondary"
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
                                <a href="/" variant="body2" color="inherit" className={classes.link}>
                                    Forgot password ?
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <a href="/" variant="body2" color="primary" className={classes.link}>
                                   Don't have an account ?
                                </a>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </div>
    )
}

export default LoginPage
