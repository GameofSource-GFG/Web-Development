import React from "react";
import BodyCard from "./BodyCard";
import styled from "styled-components";
// Assets
import networkImg from "../../assets/network.png";
import skillImg from "../../assets/skill.png";
import interactionImg from "../../assets/interaction.png";
import leaderImg from "../../assets/leader.png";
import anywhereImg from "../../assets/anywhere.png";
import ScrollTop from "../ScrollToTop/ScrollTop"
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    font-size: 150%;
    font-weight: bold;
  }

  // media quries
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;

function HomePageBody() {
  return (
    <Container>
      <ScrollTop showBelow={200} />  
      <h1>Why GeeksForGeeks Student Chapter ?</h1>
      <BodyCard
        img={networkImg}
        heading="Build Your Network"
        para="Build your network and collaborate with people."
        id={1}
      />
      <BodyCard
        img={leaderImg}
        heading="Be A Leader"
        para="Lead and build a programming enviornment in your college."
        id={2}
      />
      <BodyCard
        img={interactionImg}
        heading="Improve Communication"
        para="Interacte with people and improve your communication skill."
        id={3}
      />
      <BodyCard
        img={skillImg}
        heading="Be a Skill Master"
        para="Learn as many skill as you can."
        id={4}
      />
      <BodyCard
        img={anywhereImg}
        heading="Be Flexible"
        para="Learn and work according to your suitable place and time."
        id={5}
      />
    </Container>
  );
}

export default HomePageBody;
