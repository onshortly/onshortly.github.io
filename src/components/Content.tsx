// Main.tsx

import React from 'react';
import styled from 'styled-components';

// Styled components
const MainWrapper = styled.main`
    padding: 20px;
`;

const Section = styled.section`
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &:last-child {
        margin-bottom: 0;
    }
`;

const SectionTitle = styled.h2`
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
    transition: color 0.3s ease;
`;

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

const Project = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px); /* Lift up on hover */
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const SkillList = styled.ul`
    list-style-type: none;
    padding: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

const SkillListItem = styled.li`
    margin-bottom: 10px;
`;

const ContactInfo = styled.div`
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

const Content: React.FC = () => {
    return (
        <MainWrapper>
            <Section className="projects">
                <Container>
                    <SectionTitle>Projects</SectionTitle>
                    <ProjectsGrid>
                        {/* Project items */}
                    </ProjectsGrid>
                </Container>
            </Section>

            <Section className="skills">
                <Container>
                    <SectionTitle>Skills</SectionTitle>
                    <SkillList>
                        {/* Skills list items */}
                    </SkillList>
                </Container>
            </Section>

            <Section className="contact">
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <ContactInfo>
                        {/* Contact information */}
                    </ContactInfo>
                </Container>
            </Section>
        </MainWrapper>
    );
};

export default Content;
