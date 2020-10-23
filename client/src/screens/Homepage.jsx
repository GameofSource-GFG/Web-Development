import React from 'react'
import styled from 'styled-components'

// components
import HomePageBody from '../components/HomePageBody'
import HomePageHeader from '../components/HomePageHeader'
import HomePageFooter from '../components/HomePageFooter'




const Container = styled.div`
`

function HomePage() {
    return (
        <Container>
            <HomePageHeader />
            <HomePageBody />

            <HomePageFooter />
        </Container>
    )
}

export default HomePage