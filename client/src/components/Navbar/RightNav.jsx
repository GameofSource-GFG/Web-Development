import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledRightNav = styled.ul`
        width: 100vh;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2em;
        margin-left: auto;
        z-index: 20;
        li{
            font-size: 1.2rem;
            color: green;
            font-weight: bolder;
            list-style: none;
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2em;
            margin: 0 .1em;
            &:hover{
                background-color: #f7f7f7;
            }
            a{
                text-decoration: none;
                color: green;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 2em;
            }
        }
        @media (max-width: 1000px){
            justify-content: space-between;
        }
        @media (max-width: 850px){
            width: 90vw;
            height: 90vh;
            transition: transform .3s ease-in-out;
            display: flex;
            transform: ${({open}) => open ? "translateX(0%)" : "translateX(100%)"};
            flex-flow: column nowrap;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            background-color: #fdfdfd;
            box-shadow: 0 0 4px #f2f2f2;
            right: 0;
            margin-top: 10vh;
            li{
                margin-top: 1em;
                height: 2em;
                font-size: 1rem;
                &:hover{
                    background-color: #f1f1f1;
                    cursor: pointer
                }
            }
        }
`
function RightNav({open}) {
    return (
        <div>
            <StyledRightNav open={open}>
            <li><Link to={"/Homepage"}>Home</Link></li>
                <li><Link to={"/Homepage"}>Home</Link></li>
                <li><Link to={"/AboutUs"}>About Us</Link></li>
                <li><Link to={"/Events"}>Events</Link></li>
                <li><Link to={"/ContactUs"}>Contact us</Link></li>
                <li><Link to={"/MemberBlock"}>Members</Link></li>
            </StyledRightNav>
        </div>
    )
}

export default RightNav
