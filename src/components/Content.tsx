import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ScrollPill from "./ScrollPill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { device } from "../utils";
import { useNavigate } from "react-router-dom";

const MainWrapper = styled.div`
  padding: 20px;
`;

const Section = styled.div<{ isVisible: boolean }>`
  margin-bottom: 40px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.isVisible ? "0" : "20px")});
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
  transition: color 0.3s ease;
  color: #fff;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
  gap: 20px;
`;

const Project = styled.div`
  cursor: pointer;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 180px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px); /* Lift up on hover */
  }
`;

const ProjectTitle = styled.span`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.div`

  color: #666;
`;

const SkillItem = styled.p`
  font-size: 24px;
  color: #fff;
`;

const NavIcon = styled(FontAwesomeIcon)`
  width: 1rem;
  position: relative;
  left: 95%;
  margin-top: auto;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectItem: React.FC<{
  title: string;
  content: string;
  destination: string;
  external?: boolean;
}> = ({ title, content, destination, external }) => {
  const navigate = useNavigate();
  return (
    <Project onClick={() => {
      external ? window.open(destination, '_blank') : navigate(destination);
    }}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{content}</ProjectDescription>
      <NavIcon icon={faAngleRight} size="2x" />
    </Project>
  );
};

const MainContent: React.FC = () => {
  const professionalProjects: {
    title: string;
    content: string;
    destination: string;
  }[] = [
    {
      title: "CAPE Analytics",
      content:
        "Full-stack web development. Working with geospatial data and mapping tools. React front-end, Node.js proxy server. Python backend.",
      destination: "",
    },
    {
      title: "Weedmaps",
      content:
        "Front-end development. Cannabis e-commerce app with millions of MAUs. Server-side rendering. Reworked high-traffic UIs.",
      destination: "",
    },
    {
      title: "KCF Technologies",
      content:
        "Full-stack web development. IoT app in React, displaying massive timeseries datasets. ASP.Net Core backend. CassandraDB. Lots of data.",
      destination: "",
    },
  ];

  const personalProjects: {
    title: string;
    content: string;
    destination: string;
    external?: boolean;
  }[] = [
    {
      title: "Jaunt",
      content:
        "Vibe-y, black & white roguelike RPG. Heavily stylized. Work in progress.",
      destination: "/jaunt",
    },
    {
      title: "Urza.ai Discord Bot",
      content:
        "Discord bot written to facilitate the creation of thousands of AI generated Magic: The Gathering cards.",
      destination: "https://github.com/onshortly/URZA.ai-Bot",
      external: true,
    },
  ];

  const skills = [
    "javascript/typescript",
    "react/react native",
    "c#/asp.net",
    "python",
    "node.js",
    "next.js/ssr",
    "playwright",
    "cypress",
    "jest",
    "react testing library",
    "aws",
    "docker",
    "d3.js",
    "figma",
  ];
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const top = projectsRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        projectsRef.current.style.opacity = isVisible ? "1" : "0";
        projectsRef.current.style.transform = isVisible
          ? "translateY(0)"
          : "translateY(20px)";
      }

      if (skillsRef.current) {
        const top = skillsRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        skillsRef.current.style.opacity = isVisible ? "1" : "0";
        skillsRef.current.style.transform = isVisible
          ? "translateY(0)"
          : "translateY(20px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainWrapper>
      <ScrollPill />
      <Section ref={projectsRef} isVisible={true} className="projects">
        <Container>
          <SectionTitle id="content-container">Professional Work</SectionTitle>

          <ProjectsGrid>
            {professionalProjects.map((project) => {
              return (
                <ProjectItem
                  title={project.title}
                  content={project.content}
                  destination={project.destination}
                />
              );
            })}
          </ProjectsGrid>
        </Container>
        <Container>
          <SectionTitle>Personal Projects</SectionTitle>
          <ProjectsGrid>
            {personalProjects.map((project) => {
              return (
                <ProjectItem
                  title={project.title}
                  content={project.content}
                  destination={project.destination}
                  external={project.external}
                />
              );
            })}
          </ProjectsGrid>
        </Container>
      </Section>

      <Section ref={skillsRef} isVisible={false} className="skills">
        <Container>
          <SectionTitle>Primary Skills</SectionTitle>
          <SkillsWrapper>
            {skills.map((skill, idx) => {
              return (
                <>
                  <SkillItem>{skill}</SkillItem>
                  <>
                    {idx + 1 !== skills.length && (
                      <FontAwesomeIcon
                        icon={faCircle}
                        color="#FFF"
                        style={{
                          margin: "0 16px",
                        }}
                      />
                    )}
                  </>
                </>
              );
            })}
          </SkillsWrapper>
        </Container>
      </Section>
    </MainWrapper>
  );
};

export default MainContent;
