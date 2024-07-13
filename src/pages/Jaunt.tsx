import styled from "styled-components";
import { Page } from "../components/Page";
import { ContentPageContent } from "./styles";
import MerchantImage from "../assets/merchant.webp";
import GameplayGif from "../assets/wolv.gif";
import { device } from "../utils";

const PageTitle = styled.h1`
  color: #fff;
`;

const BlurbContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  gap: 120px;
  margin: 64px 0;
  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`;

const Jaunt: React.FC = () => {
  return (
    <Page>
      <ContentPageContent>
        <PageTitle>Jaunt</PageTitle>
        <BlurbContainer>
          <img width={"100%"} src={MerchantImage}></img>
          <div>
            <span>
              Jaunt is the game I have always wanted to create. A dark and
              ominous world that doesn't take itself too seriously. You die, you start over...
              but your past may follow you more than you realize. Meet strange NPCs with hidden motives, 
              delve into deep caverns, collect devious magical items, and inch ever closer to escaping The Dreaded Wood.
            </span>
          </div>
        </BlurbContainer>
        <BlurbContainer>
          <div>
            <span>
              Light is scarce, but enemies abound.
            </span>
          </div>
          <img width={"100%"} src={GameplayGif}></img>
        </BlurbContainer>
      </ContentPageContent>
    </Page>
  );
};

export default Jaunt;
