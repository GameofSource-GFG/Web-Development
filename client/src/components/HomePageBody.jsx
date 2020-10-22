import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 2rem 0 0 0;
    h1{
        font-size: 150%;
        font-weight: bold;
    }

    // media quries
    @media(max-width: 768px) {
        h1{
            font-size: 100%;
        }
    }
`

function HomePageBody() {
    return (
        <Container>
            <h1>Why GeeksForGeeks Student Chapter ?</h1>
        </Container>
    )
}

export default HomePageBody