// Header.tsx

import React from 'react';
import styled from 'styled-components';

// Styled components
const HeaderWrapper = styled.header`
    background-color: #007bff;
    color: #fff;
    padding: 30px 0;
    text-align: center;
    margin-bottom: 30px;
    transition: background-color 0.3s ease, color 0.3s ease;
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

const SocialLinks = styled.div`
    margin-top: 20px;
`;

const SocialLink = styled.a`
    color: #fff;
    font-size: 1.5em;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
        color: #f0f0f0;
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Profile>
                    <ProfilePic src="profile-pic.jpg" alt="Profile Picture" />
                    <Name>John Smith</Name>
                    <JobTitle>Senior Frontend Developer</JobTitle>
                    <SocialLinks>
                        <SocialLink href="#"><i className="fab fa-linkedin"></i></SocialLink>
                        <SocialLink href="#"><i className="fab fa-github"></i></SocialLink>
                        <SocialLink href="#"><i className="fab fa-twitter"></i></SocialLink>
                    </SocialLinks>
                </Profile>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
