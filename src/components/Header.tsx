import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #000;
  z-index: 1000;
  height: 50px;
  padding: 16px 32px;
  align-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const Name = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s ease;
  width: 30px;
  &:hover {
    color: #f0f0f0;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Name>Brent Baskin</Name>
        <div>
          <SocialLink
            href="https://www.linkedin.com/in/brent-baskin/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/_deathandtaxes"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </SocialLink>
          <SocialLink
            href="https://www.github.com/onshortly"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </SocialLink>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
