import Project from '../components/project'
import projects from './../Assets/projects-data.json'
// import { useState } from 'react'


const Projects = () => {
  // const [details, setDitails] = useState('')
  // const [project, setProject] = useState<IProject>()

  // const handelprojectClick = (project: IProject) => {
  //     setDitails('show-details')
  //     setProject(project)
  // }

  // const handelCloseDetails = () => {
  //   setDitails('hide-details')
  // }

  return (
    <div className='container'>
      {/* <div className={`project-details ${details}`}>
                <img src={exit_icon} id="project-details-exit-icon" onClick={handelCloseDetails} />
                {project?.title}

            </div> */}

      <div className="projects">
        {projects.map((project: IProject) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}

interface IProject {
  id: number
  title: string
  visit: string
  github: string
  brief: string
}


export default Projects
