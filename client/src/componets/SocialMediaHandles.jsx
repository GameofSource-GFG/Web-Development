import React from 'react'
import styled from "styled-components";
// import icons
import  {Facebook, YouTube, Instagram, GitHub, Twitter, LinkedIn}  from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #f0f0f0;
    div{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        a{
            text-decoration: none;
            color: black;
            &:hover{
                font-weight: bolder;
                color: blue;
                font-size: 1.5rem;
            }
        }
    }
    @media(max-width: 768px){
        font-size: .7rem;
        div{
            width: 85%;
        }
    }

`
function SocialMediaHandles() {
    return (
        <Container>
            <div>
                <a href="/"><Facebook /></a>
                <a href="/"><Instagram /></a>
                <a href="/"><Twitter /></a>
                <a href="/"><YouTube /></a>
                <a href="/"><GitHub /></a>
                <a href="/"><LinkedIn /></a>
            </div>
        </Container>
    )
}

export default SocialMediaHandles
