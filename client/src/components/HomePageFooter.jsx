import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-image: radial-gradient(yellow 40%, orange);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 10% 0 10%;
    .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        h4{
            font-weight: bolder;
        }
        ul>li{
            list-style: circle;
            a{
                text-decoration: none;
                color: black;
            }
        }
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h4{
            color: green;
            font-weight: bolder;
        }
        small{
            color: green;
        }
        
    }
    @media(max-width: 768px){
        .left{
            h4{
                font-size: 1rem;
            }
            ul>li{
                font-size: .7rem;
            }
        }
        .right{
            h4{
                font-size: 1rem;
            }
        }
    }
`

function HomePageFooter() {
    return (
        <Container>
            <div className="left">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Register</a></li>
                    <li><a href="/">Sign In</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div className="right">
                <h4>GFG</h4>
                <h4>GeeksForGeeks</h4>
                <small>Student Chapter</small>
            </div>
        </Container>
    )
}

export default HomePageFooter