import React from 'react'
import BodyCard from '../components/BodyCard'
import HomePageBody from '../components/HomePageBody'
import HomePageHeader from '../components/HomePageHeader'



// Assets
import networkImg from '../assets/network.png'
import skillImg from '../assets/skill.png'
import interactionImg from '../assets/interaction.png'
import leaderImg from '../assets/leader.png'
import anywhereImg from '../assets/anywhere.png'
import HomePageFooter from '../components/HomePageFooter'

function HomePage() {
    return (
        <div>
            <HomePageHeader />
            <HomePageBody />
            <BodyCard img={networkImg} heading="Build Your Network" para="Build your network and collaborate with people." id={1}/>
            <BodyCard img={leaderImg} heading="Be A Leader" para="Lead and build a programming enviornment in your college." id={2}/>
            <BodyCard img={interactionImg} heading="Improve Communication" para="Interacte with people and improve your communication skill." id={3}/>
            <BodyCard img={skillImg} heading="Be a Skill Master" para="Learn as many skill as you can." id={4}/>
            <BodyCard img={anywhereImg} heading="Be Flexible" para="Learn and work according to your suitable place and time." id={5}/>
            <HomePageFooter />
        </div>
    )
}

export default HomePage