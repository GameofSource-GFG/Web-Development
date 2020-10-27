import React from 'react'
import {Grid, TextField, makeStyles, Button, Typography} from '@material-ui/core'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { db } from './firebase.config'

const Mycard = styled.div`
    width: 60%;
    background-color: #f9f9f9;
    border-radius: 1rem;
    padding: 2rem 4rem;
    margin: 0 auto;
    @media(max-width: 768px){
        width: 100%;
        margin: 0;
        padding: 2rem;
    } 
`
const useStyles = makeStyles(theme => ({
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "green",
        fontWeight: "bolder"
    },
    inputFile: {
        display: "none"
    },
    cameraButton: {
        width: "10px"
    },
    headings: {
        margin: "1rem 0",
        fontWeight: "bolder",
    },
    labels: {
        fontSize: ".8rem",
        fontWeight: "bolder",
        left: "0",
        textAlign: "left"
    }
}))

function EventForm() {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            eventName: "",
            startDate: "",
            endDate: "",
            eventDis: "",
            eventTheme: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode : "",
            country: "",
            eligiblity: "",
            sponsors: "",
            noMember: 0,
            
        },
        onSubmit: value => {
            db.collection("events")
                .add(value)
                    .then(() => {
                        alert("Your event has saved")
                    })
                    .catch((err) => {
                        console.log(err)
                    })
        },
        validate: value => {
            let errors = {}
            if(!value.eventName){
                errors.eventName = "Event Name is required*"
            }
            else if(!value.startDate){
                errors.startDate = "start Date is required"
            }
            else if(!value.endDate){
                errors.endDate = "end Date is required"
            }
            else if(value.endDate === value.startDate){
                errors.endDate = "end Date should be diffrent"
            }
            else if(!value.eventDis){
                errors.eventDis = "event discription is required*"
            }
            else if(!value.eventTheme){
                errors.eventTheme = "Event theme is required*"
            }
            else if(!value.address1){
                errors.address1 = "Address 1 is required*"
            }
            else if(!value.city){
                errors.city = "City name is required*"
            }
            else if(!value.state){
                errors.state = "State Name is required*"
            }
            else if(!value.zipCode){
                errors.zipCode = "zip Code is required*"
            }
            else if(!value.country){
                errors.country = "Country Name is required*"
            }
            else if(!value.noMember){
                errors.noMember = "You should have atleast 1 member"
            }
            else if(value.noMember === 0 || value.noMember < 0){
                errors.noMember = "You should have atleast 1 member"
            }
            else if(!value.eligiblity){
                errors.eligiblity = "You Must have to set an eligiblity condition*"
            }
            return errors
        }
    })
    

    // member details form 
    let initialMembers = []
    for(let i = 0; i < formik.values.noMember; i++){
        initialMembers.push(
            <div style={{ margin: "1rem"}}>
                <Typography variant="h6" style={{fontWeight: "bolder",fontSize: ".9rem"}}>
                    {`Member ${i+1}`}
                </Typography>
                    <TextField 
                        name={`member${i+1}Name`}
                        label="Name"
                        fullWidth
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <TextField 
                        name={`member${i+1}Email`}
                        label="Email"
                        required
                        fullWidth
                        type="email"
                        onChange={formik.handleChange}
                    />
            </div>
            )
    }
    return (
        <div style={{width: "100%"}}>
            <Mycard>
                <form onSubmit={formik.handleSubmit}>
                    <div className={classes.logo}>
                        <h1 style={{marginBottom: "0"}}>GFG</h1>
                        <small>Student Chapter</small>
                        <h1>Event Registration</h1>
                    </div>
                    <Grid container spacing={3}>
                        <Typography variant="h4" component="h1" className={classes.headings}>
                            Basic Details
                        </Typography>
                        <Grid item xs={12}>
                            <TextField 
                                id="vventName"
                                label="Event Name"
                                name="eventName"
                                fullWidth
                                autoComplete="Event-Name"
                                type="text"
                                margin="normal"
                                onChange={formik.handleChange}
                                value={formik.values.EventName}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.eventName && formik.errors.eventName) ? true : false}
                                helperText={(formik.touched.eventName && formik.errors.eventName) ? formik.errors.eventName : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label className={classes.labels}>Start Date and time</label>
                            <TextField 
                                type="datetime-local"
                                id="startDate"
                                name="startDate"
                                fullWidth
                                autoComplete="Event-start-date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.startDate && formik.errors.startDate) ? true : false}
                                helperText={(formik.touched.startDate && formik.errors.startDate) ? formik.errors.startDate : ""}
                                value={formik.values.startDate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label className={classes.labels}>End Date and time</label>
                            <TextField 
                                type="datetime-local"
                                id="endDate"
                                name="endDate"
                                fullWidth
                                autoComplete="Event-end-date"
                                value={formik.values.endDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.endDate && formik.errors.endDate) ? true : false}
                                helperText={(formik.touched.endDate && formik.errors.endDate) ? formik.errors.endDate : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="eventDis"
                                label="Event Discription"
                                name="eventDis"
                                fullWidth
                                autoComplete="Event-Discription"
                                type="text"
                                margin="normal"
                                onChange={formik.handleChange}
                                value={formik.values.EventDis}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.eventDis && formik.errors.EventDis) ? true : false}
                                helperText={(formik.touched.eventDis && formik.errors.eventDis) ? formik.errors.eventDis : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="EventTheme"
                                label="Event Theme"
                                name="eventTheme"
                                fullWidth
                                autoComplete="Event-Theme"
                                type="text"
                                margin="normal"
                                onChange={formik.handleChange}
                                value={formik.values.EventTheme}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.eventTheme && formik.errors.eventTheme) ? true : false}
                                helperText={(formik.touched.eventTheme && formik.errors.eventTheme) ? formik.errors.eventTheme : ""}
                            />
                        </Grid>
                        <Typography variant="h4" component="h1" className={classes.headings}>
                            Address Details
                        </Typography>
                        <Grid item xs={12}>
                            <TextField
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="event address-line1"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.address1}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.address1 && formik.errors.address1) ? true : false}
                                helperText={(formik.touched.address1 && formik.errors.address1) ? formik.errors.address1 : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="evnet address-line2"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.address2}
                                onBlur={formik.handleBlur}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="event address-level2"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.city && formik.errors.city) ? true : false}
                                helperText={(formik.touched.city && formik.errors.city) ? formik.errors.city : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                id="state"
                                name="state"
                                label="state/province/region"
                                fullWidth
                                autoComplete="event address-level2"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.state}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.state && formik.errors.state) ? true : false}
                                helperText={(formik.touched.state && formik.errors.state) ? formik.errors.state : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                id="zipCode"
                                name="zipCode"
                                label="zip Code"
                                fullWidth
                                autoComplete="event address zip Code"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.zipCode}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.zipCode && formik.errors.zipCode) ? true : false}
                                helperText={(formik.touched.zipCode && formik.errors.zipCode) ? formik.errors.zipCode : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="event address country name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.country && formik.errors.country) ? true : false}
                                helperText={(formik.touched.country && formik.errors.country) ? formik.errors.country : ""}
                            />
                        </Grid>
                        {/* for poster */}
                        {/* <Grid item xs={12}>
                            <input
                                accept="image/*"
                                className={classes.inputFile}
                                id="contained-button-file"
                                multiple
                                type="file"
                                />
                                <label htmlFor="contained-button-file">
                                <Grid container direction="row" justify="flex-start" alignItems="center">
                                <Grid item xs={3} className={classes.cameraButton}>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                                </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                <small>Upload poster of your image</small>
                                </Grid>
                                </Grid>
                                </label>
                            </Grid> */}

                        <Typography variant="h4" component="h1" className={classes.headings}>
                            Team Details
                        </Typography>
                        <Grid item xs={12}>
                            <TextField 
                                type="number"
                                label="Number of Team Members"
                                fullWidth
                                name="noMember"
                                id="noMember"
                                value={formik.values.noMember}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.noMember && formik.errors.noMember) ? true : false}
                                helperText={(formik.touched.noMember && formik.errors.noMember) ? formik.errors.noMember : ""}
                            />
                        </Grid>
                        {initialMembers.map((value, index) => {
                            return(
                                <Grid item key={index} xs={12}>
                                    {value}
                                </Grid>
                            )
                        })}
                        <Typography variant="h4" component="h1" className={classes.headings}>
                            Additional Details
                        </Typography>
                        <Grid item xs={12}>
                            <TextField 
                                id="eligiblity"
                                name="eligiblity"
                                label="eligiblity criteria"
                                fullWidth
                                autoComplete="event participation criteria"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.eligiblity}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.eligiblity && formik.errors.eligiblity) ? true : false}
                                helperText={(formik.touched.eligiblity && formik.errors.eligiblity) ? formik.errors.eligiblity : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="sponsors"
                                name="sponsors"
                                label="Sponsors"
                                fullWidth
                                autoComplete="event sponsors"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.sponsors}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                variant="contained"
                                color="secondary"
                                type="submit"
                            >
                                Save Event
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Mycard>
        </div>
    )
}

export default EventForm 