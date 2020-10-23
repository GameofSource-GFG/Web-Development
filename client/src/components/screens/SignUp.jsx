import React  from 'react'
import { TextField, Grid, makeStyles, Container, Typography, Button, CssBaseline } from '@material-ui/core'
import {Link, useHistory} from "react-router-dom"
import { useFormik } from 'formik'


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




function SignUp() {
    const history = useHistory()
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            name: "", 
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
                    try{
                        const res = await fetch('/signup', {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify(values)
                                            })
                        const userData = await res.json()
                        
                        // check for any unprocessed type errros 
                        if(userData.errors){
                          return  console.log("422 errors",userData)
                        }
                        else{
                            history.push("/signin")
                        }
                        }
                    catch(err){
                        console.log(err)
                    }
        },
        validate: (values) => {
            let errors = {}
            if(!values.name){errors.name="Username is Required"}
            else if(!values.email){errors.email="Email is Required"}
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){errors.email = "Email is not valid"}
            else if(!values.password){errors.password="Password is Required"}
            else if(values.password.length < 6){errors.password="Password length should be atleast 6 charachters long"}
            return errors
        }
    })

    
    return (
        <div>
            <Container component="main" maxWidth="xs" >
                
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LooksOutlinedIcon />
                    </Avatar> */}
                    <Typography variant="h4" component="h1" className={classes.logo} >
                        SocialBuddy
                    </Typography>
                    <form  className={classes.form} onSubmit={formik.handleSubmit}>
                        <TextField 
                            error={ formik.touched.name && formik.errors.name ? true : false}
                            helperText={ formik.touched ? formik.errors.name : ""}
                            variant="outlined"
                            fullWidth
                            label="Username"
                            name="name"
                            id="name"
                            autoComplete="name"
                            margin="normal"
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <TextField 
                            error={formik.touched.email && formik.errors.email ? true : false}
                            helperText={formik.touched ? formik.errors.email : ""}
                            variant="outlined"
                            label="email"
                            name="email"
                            fullWidth
                            id="email"
                            autoComplete="email"
                            type="text"
                            onBlur={formik.handleBlur}
                            margin="normal"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            
                        />
                        <TextField 
                            error={formik.touched.password && formik.errors.password ? true : false}
                            helperText={formik.touched ? formik.errors.password : ""}
                            variant="outlined"
                            label="password"
                            fullWidth
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            type="password"
                            onBlur={formik.handleBlur}
                            margin="normal"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <Button
                            color="primary"
                            fullWidth
                            variant="contained"
                            className={classes.btn}
                            size="large"
                            type="submit"
                        >
                            SignUp
                        </Button>
                        <Grid container >
                            <Grid item xs={12} sm={6} lg={6}>
                                <Link to="/signin" variant="body2" color="primary" className={classes.link}>
                                   Already have an account ?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                
                
            </Container>
        </div>
    )
}

export default SignUp
