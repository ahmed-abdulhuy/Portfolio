// git url of images
const githubIcon = new URL('../Assets/github-icon.png', import.meta.url)
const visitIcon = new URL('../Assets/visit-icon.png', import.meta.url)
// const exit_icon = new URL("../Assets/exit-icon.png", import.meta.url);


function Project(props: IProps) {

  // open possible links to the project
  const handelClick = (url: string) => {
    if (url.length > 0) {
      window.open(url, '_blank')
    }
  }

  const project = props.project

  // used to simplify icone adition to each project
  const icons: IIcons = {
    Github: githubIcon,
    Visit: visitIcon,
  }


  return (
    <div
      className="project-brief shadow"
    // onClick={() => handelprojectClick(project)}
    >
      <h4>{project.title}</h4>
      <p>{project.brief}</p>

      <div className="refrences">

        {/* Create button for each link to the broject */}
        {['Github', 'Visit'].map((label) => {
          // Get the URL of the link
          const url = project[label.toLowerCase() as keyof IProject].toString()
          return url ? (
            <button
              key={`${label}_${project.id}`}
              onClick={() => {
                handelClick(url)
              }}
            >
              {/* add image to button based on linke type */}
              <img src={icons[label as keyof IIcons].toString()} alt={url} id={`${label.toLowerCase()}_icon`} />
              <label htmlFor={`${label.toLowerCase()}_icon`} className="label-hover">
                {label}
              </label>
            </button>
          ) : undefined
        })}
      </div>
    </div>
  )
}


interface IProps {
  project: IProject

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


export default Project;
