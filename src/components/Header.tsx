import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfilePicture from '../assets/profile-picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeaderWrapper = styled.header<{isCondensed: boolean}>`
    position: sticky;
    top: 0;
    width: 100%;
    padding: 60px 0 30px 0;
    background-color: #007bff;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: height 0.3s ease, padding 0.3s ease;

    ${props => props.isCondensed && `
        height: 50px; /* Adjust height as needed */
        padding: 5px 20px; /* Adjust padding as needed */
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    `}
`;

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfilePic = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Scale up on hover */
    }
`;

const Name = styled.h1`
    margin-top: 10px;
    font-size: 2.5em;
    transition: color 0.3s ease;
`;

const JobTitle = styled.p`
    font-size: 1.5em;
    margin-top: 5px;
    transition: color 0.3s ease;
`;

const JobSubTitle = styled.p`
    font-size: 1em;
    margin-top: 5px;
    transition: color 0.3s ease;
`;

const SocialLinks = styled.div`
    margin-top: 20px;
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
    const [isCondensed, setIsCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        setIsCondensed((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // Previous logic.
  }, []);

    return (
        <HeaderWrapper isCondensed={isCondensed}>
            <Container>
                {!isCondensed && <Profile>
                    <ProfilePic src={ProfilePicture} alt="Profile Picture" />
                    <Name>Brent Baskin</Name>
                    <JobTitle>Senior Software Engineer</JobTitle>
                    <JobSubTitle>Meticulous and highly motivated. Obsessed with that very special space between art and science.</JobSubTitle>
                    <SocialLinks>
                        <SocialLink href="https://www.linkedin.com/in/brent-baskin/" target='_blank'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></SocialLink>
                        <SocialLink href="https://www.instagram.com/_deathandtaxes" target='_blank'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></SocialLink>
                    </SocialLinks>
                </Profile>
}
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
