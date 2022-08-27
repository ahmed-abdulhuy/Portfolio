import projects from './../Assets/projects-data.json'
// import { useState } from 'react'

// git url of images
const githubIcon = new URL('../Assets/github-icon.png', import.meta.url)
const visitIcon = new URL('../Assets/visit-icon.png', import.meta.url)
// const exit_icon = new URL("../Assets/exit-icon.png", import.meta.url);

const Projects = () => {
  // const [details, setDitails] = useState('')
  // const [project, setProject] = useState<IProject>()

  const handelClick = (url: string) => {
    if (url.length > 0) {
      window.open(url, '_blank')
    }
  }

  // const handelprojectClick = (project: IProject) => {
  //     setDitails('show-details')
  //     setProject(project)
  // }

  // const handelCloseDetails = () => {
  //   setDitails('hide-details')
  // }

  const icons: IIcons = {
    Github: githubIcon,
    Visit: visitIcon,
  }

  return (
    <div>
      {/* <div className={`project-details ${details}`}>
                <img src={exit_icon} id="project-details-exit-icon" onClick={handelCloseDetails} />
                {project?.title}

            </div> */}

      <div className="projects">
        {projects.map((project: IProject) => (
          <div
            key={project.id}
            className="project-brief shadow"
            // onClick={() => handelprojectClick(project)}
          >
            <h4>{project.title}</h4>
            <p>{project.brief}</p>
            <div className="refrences">
              {['Github', 'Visit'].map((label) => {
                const url = project[label.toLowerCase() as keyof IProject].toString()
                return url ? (
                  <button
                    key={`${project.id}_${label}`}
                    onClick={() => {
                      handelClick(url)
                    }}
                  >
                    {/* eslint-disable-next-line no-use-before-define*/}
                    <img src={icons[label as keyof IIcons].toString()} alt={url} id={`${label.toLowerCase()}_icon`} />
                    <label htmlFor={`${label.toLowerCase()}_icon`} className="label-hover">
                      {label}
                    </label>
                  </button>
                ) : undefined
              })}
            </div>
          </div>
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

interface IIcons {
  Github: URL
  Visit: URL
}

export default Projects
