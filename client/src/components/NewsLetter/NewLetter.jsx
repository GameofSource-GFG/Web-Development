import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core'
import {Email} from '@material-ui/icons'
import { useFormik } from 'formik'

// styled Container
const Container = styled.div`
    width: 100%;
    background-color: #f0f0f0;
    padding: 2rem 6rem;
    box-sizing: border-box;
    .headings{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h1{
            font-size: 1.8rem;
            span{
                font-size: 1.8rem;
                color: green;
            }
            small{
                font-size: 1.2rem;
                color: green;
                line-height: 100%;
                top: -2px;
                font-weight: bolder;
                margin-left: .2rem;
            }
        }
        span{
            margin-top: 1rem;
            font-size: 1rem;
        }
    }
    .formField{
        width: 100%;
        height: 40%;
        form{
            width: 100%;
            height: 100%;
            display: grid;
            padding-top: 2rem;
            grid-template-columns: 2fr 2fr;
            grid-gap: 1rem;

            button{
                width: 150px;
                height: 40px;
                background-color: green;
                color: white;
                border-radius: 2rem;
                outline: none;
                border: none;
                font-weight: bolder;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
            }
        }
    }

    // media quaries
    @media (max-width: 768px) {
        width: 100%;
        .headings{
            h1{
                font-size: 1.4rem;
                span{
                    font-size: 1.4rem;
                }
                small{
                    font-size: 1rem;
                }
            }
            span{
                font-size: .8rem;
                margin-top: .5rem;
            }
        }
        .formField{
            form{
                grid-template-columns: 1fr;
            }
        }
    }
    @media (max-width: 600px){
        padding: 2rem 1rem;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 2rem 1rem;
        .headings{
            h1{
                font-size: 1rem;
                span{
                    font-size: 1rem;
                }
                small{
                    font-size: .6rem;
                }
            }
            span{
                font-size: .6rem;
                margin-top: .4rem;
            }
        }
        .formField{
            form{
                grid-template-columns: 1fr;
                grid-gap: 3.5rem;
                .inputField{
                    height: 1em;
                    width: 80%;
                }
                button{
                    width: 120px;
                    height: 25px;
                    font-size: .6rem;
                    .emailIcon{
                        font-size: .8rem;
                    }
                }
            }
        }
    }

`;



function NewsLetter(){
    // formik
    const formik = useFormik({

        // Initial values of form fields
        initialValues: {
            email: ""
        },

        // event handler for form subsmission
        onSubmit: values => {
            alert("Subscription Succeed.")
            console.log(values)
        },

        // events for validation
        validate: values => {
            let errors = {}

            // check for email existance
            if(!values.email){
                errors.email = "Email is required for subscription."
            }

            // check for email type
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Email is not valid"
            }
            return errors
        }
    })
    return (
        <Container >
            <div className="headings">
                <h1>Keep In Touch With <span>GFG</span><small>Student Chapter</small>.</h1>
                <h1>Subscribe To Our NewsLetter.</h1>
                <span>Get The Latest Updates About Upcoming Events and Many More.</span>
            </div>
            <div className="formField" onSubmit = {formik.handleSubmit}>
                <form>
                    <TextField 
                        className="inputField"
                        variant = "outlined"
                        size = "small"
                        label = "Enter Your Email Address"
                        name = "email"
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        value = {formik.values.email}
                        error = {(formik.touched.email && formik.errors.email) ? true : false }
                        helperText = {(formik.touched.email && formik.errors.email) ? formik.errors.email : ""}
                    />
                    <button type="submit">SUBSCRIBE<Email className="emailIcon"/></button>
                </form>
            </div>
        </Container>
    )
}

export default NewsLetter;