import React from "react";
import styled from "styled-components";

// components
import HomePageBody from "./HomePageBody";
import HomePageHeader from "./HomePageHeader";
import HomePageFooter from "./HomePageFooter";

const Container = styled.div``;

function HomePage() {
  return (
    <Container>
      <HomePageHeader />
      <HomePageBody />
      <HomePageFooter />
    </Container>
  );
}

export default HomePage;
