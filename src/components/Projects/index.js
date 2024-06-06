import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Loyihalar</Title>
        <Desc>
        </Desc>
        <CardContainer>
          {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects