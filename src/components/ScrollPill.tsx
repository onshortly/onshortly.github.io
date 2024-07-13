import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plx from "react-plx";
import styled from "styled-components";
import { device } from "../utils";

const PillContainer = styled(Plx)`
  cursor: pointer;
  position: fixed;
  width: 180px;
  bottom: 0;
  margin: 50px auto;
  left: 0;
  right: 0;
  border-radius: 999px;
  background: #000;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #FFF solid;
  span {
    font-family: Futura;
    font-size: 1.5rem;
    color: #fff;
  }
`;

const ScrollPill = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: (document.getElementById("content-container")?.getBoundingClientRect().top ?? 0) - 100,
      behavior: "smooth",
    });
  };

  return (
    <PillContainer
      onClick={scrollToContent}
      parallaxData={[
        {
          start: 0,
          end: 400,
          easing: "easeIn",
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacityFilter",
            },
            {
              startValue: 0,
              endValue: 150,
              property: "translateY",
            },
          ],
        },
      ]}
      style={{
        position: "fixed",
        zIndex: 101,
      }}
    >
      <span>do a scroll</span>
      <FontAwesomeIcon icon={faArrowDown} color="#FFF" size="2x" />
    </PillContainer>
  );
};

export default ScrollPill;
