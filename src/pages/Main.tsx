
import styled from "styled-components";
import Content from "../components/Content"
import Footer from "../components/Footer"
import { ParallaxHeader } from "../components/ParallaxHeader"
import Header from "../components/Header";

const MainContent = styled.div`
  background: #000;
`;

export const Main = () => {
    return (
      <MainContent>
        <Header />
        <ParallaxHeader />
        <Content />
        <Footer />
      </MainContent>
    )
}