import Plx from "react-plx";
import CastleImg from "../assets/castle.jpg";
import styled from "styled-components";
import { device } from "../utils";

const HeaderWrapper = styled.div`
  height: 100vh;
`;

const CastleContainer = styled.img`
  max-height: 1350px;
  @media ${device.sm} {
    max-height: 600px;
  }
`;

export const ParallaxHeader = () => {
    return (
        <HeaderWrapper>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 1,
                    endValue: 0.05,
                    property: "opacityFilter"
                  },
                  {
                    startValue: 1,
                    endValue: 1.6,
                    property: "scale"
                  }
                ]
              }
            ]}
            style={{
              position: "fixed",
              width: "100%",
              left: 0,
              background: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CastleContainer
              src={CastleImg}
              alt="castle"
            />
          </Plx>
        </HeaderWrapper>
      );
}