import React from "react"
import styled from "styled-components"
import Burger from "./Burger"

const Nav = styled.nav`
    text-decoration: none;
    width: 100%;
    margin: 0px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fdfdfd;
    .logo{
        color: green;
        text-decoration: none;
        font-size: 1em;
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        font-weight: bolder;
        small{
            font-size: .6rem;
        }
        @media (max-width: 768px){
            .logo{
                font-size: .8rem;
                padding: 0;
                small{
                    word-wrap: normal;
                    text-align: left;
                    padding: 0;
                }
            }

        }
    }

    
    @media (max-width: 768px){
        justify-content: space-between;
        align-items: center;
    }
`
function Navbar(){
    return(
        <div>
            <Nav>
                <a href="/" className="logo">GFG<small>Student Chapter</small></a>
                <Burger />
            </Nav>
        </div>
    )
}

export default Navbar