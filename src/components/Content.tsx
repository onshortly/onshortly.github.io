import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
    padding: 20px;
`;

const Section = styled.section<{ isVisible: boolean }>`
    margin-bottom: 40px;
    opacity: ${props => (props.isVisible ? '1' : '0')};
    transform: translateY(${props => (props.isVisible ? '0' : '20px')});
    transition: opacity 0.6s ease, transform 0.6s ease;
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
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px); /* Lift up on hover */
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
    color: #666;
`;

const SkillItem = styled.p`

`;

const MainContent: React.FC = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (projectsRef.current) {
                const top = projectsRef.current.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 100; // Adjust as needed
                projectsRef.current.style.opacity = isVisible ? '1' : '0';
                projectsRef.current.style.transform = isVisible ? 'translateY(0)' : 'translateY(20px)';
            }

            if (skillsRef.current) {
                const top = skillsRef.current.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 100; // Adjust as needed
                skillsRef.current.style.opacity = isVisible ? '1' : '0';
                skillsRef.current.style.transform = isVisible ? 'translateY(0)' : 'translateY(20px)';
            }

            if (contactRef.current) {
                const top = contactRef.current.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 100; // Adjust as needed
                contactRef.current.style.opacity = isVisible ? '1' : '0';
                contactRef.current.style.transform = isVisible ? 'translateY(0)' : 'translateY(20px)';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <MainWrapper>
            <Section ref={projectsRef} isVisible={true} className="projects">
                <Container>
                    <SectionTitle>Personal Projects</SectionTitle>
                    <ProjectsGrid>
                        <Project>
                            <ProjectTitle>Project 1</ProjectTitle>
                            <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet eleifend fermentum.</ProjectDescription>
                        </Project>
                        <Project>
                            <ProjectTitle>Project 2</ProjectTitle>
                            <ProjectDescription>Phasellus ac vestibulum justo, vitae finibus leo. Vivamus at sapien nec turpis consequat tincidunt.</ProjectDescription>
                        </Project>
                    </ProjectsGrid>
                </Container>
                <Container>
                    <SectionTitle>Past Professional Work</SectionTitle>
                    <ProjectsGrid>
                        <Project>
                            <ProjectTitle>Project 1</ProjectTitle>
                            <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet eleifend fermentum.</ProjectDescription>
                        </Project>
                        <Project>
                            <ProjectTitle>Project 2</ProjectTitle>
                            <ProjectDescription>Phasellus ac vestibulum justo, vitae finibus leo. Vivamus at sapien nec turpis consequat tincidunt.</ProjectDescription>
                        </Project>
                    </ProjectsGrid>
                </Container>
            </Section>

            <Section ref={skillsRef} isVisible={false} className="skills">
                <Container>
                    <SectionTitle>Skills</SectionTitle>
                    <SkillItem>typescript</SkillItem>
                </Container>
            </Section>

            <Section ref={contactRef} isVisible={false} className="contact">
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    {/* Contact content */}
                </Container>
            </Section>
        </MainWrapper>
    );
};

export default MainContent;
