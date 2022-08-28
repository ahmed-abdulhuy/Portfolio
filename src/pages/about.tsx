const About = () => {
  const langs = ['Python', 'C/C++', 'MATLAB/Octave', 'JavaScript', 'HTML', 'CSS', 'MySQL']
  const mlTools = ['Numpy', 'Tensorflow', 'Keras', 'OpenCV', 'Matplotlib']
  const FEFrameWork = ['ReactJS']
  const tools = ['Git', 'Linux', 'Github']
  const skillSetTitle = ['Programming Languages:', 'Machine Learning tools:', 'Front-end Framework:', 'Development Tools:']
  let idx = -1

  return (
    <div className="container">
      <div className="present-card">
        <h1>Hi, I'm Ahmed Abdelhuy from Egypt</h1>
        <p>
          I'm a junior front-end web developer, <br />
          I'm a fresh graduate student from Minia university <br />
          faculty of engineering computeter and system department.
        </p>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        {[langs, mlTools, FEFrameWork, tools].map((skillsSet) => {
          idx += 1
          return (
            <div className="skills-card" key={idx}>
              <h2>{skillSetTitle[idx]}</h2>
              <div className="skills-card-groub">
                <ul>
                  {skillsSet.map((skill) => (
                    <li className="shadow" key={skill}>
                      <strong>
                        {skill}
                      </strong>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          )
        })}

        {/* <div className="prog-lang">
                    <h2>Programming Languages</h2>
                    <ul>
                        {
                            langs.map((lang) => (
                                <li>
                                    <h3>{lang}</h3>

                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="ml-tools">
                    <ul>
                        <h2>Machine Learning tools</h2>
                        {
                            mlTools.map((mlTool) => (
                                <li>
                                    <h3>{mlTool}</h3>

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="fe-framework">
                    <ul>
                        <h2>Front-end Framework</h2>
                        {
                            FEFrameWork.map((framework) => (
                                <li>
                                    <h3>{framework}</h3>

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="tools">
                    <ul>
                        <h2>Machine Learning tools</h2>
                        {
                            tools.map((tool) => (
                                <li>
                                    <h3>{tool}</h3>

                                </li>
                            ))
                        }
                    </ul>
                </div> */}
      </div>

      <div className="projects"></div>
    </div>
  )
}

export default About
