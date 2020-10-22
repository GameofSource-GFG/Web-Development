import React from 'react'
import styled from 'styled-components'

//importing aos library
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Container = styled.div`
    width: 80%;
    height: 65vh;
    margin: .2rem auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    img{
        max-width: 100%;
        height: 100%;
        opacity: .8;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .text{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 0 0;
        h1{
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
    @media(max-width: 768px) {
        height: 40vh;
        margin: 1rem auto;
        .text{
            h1{
                font-size: 1.2rem;
            }
            p{
                font-size: .8rem;
            }
        }
        img{
            max-width: auto;
            height: 100%;
        }
    }
`

function BodyCard({img, heading, para, id}) {
    AOS.init({
        duration: 1000,
    })
    return (
        <Container data-aos={(id % 2 === 0) ? "fade-up-right" : "fade-up-left"}>
            <img src={img} alt="womenwithlaptop" style={{order: (id % 2 === 0) ? 2 : 0}} width="500px" height="150px"></img>
            <div className="text">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
        </Container>
    )
}

export default BodyCard
