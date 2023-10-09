const About = () => {
  const langs = ['Python', 'C/C++', 'MATLAB/Octave', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'PostgreSQL']
  const mlTools = ['Numpy', 'Tensorflow', 'Keras', 'OpenCV', 'Matplotlib']
  const FEFrameWork = ['ReactJS', 'Redux', 'Express', 'Node.js', 'Nightwatch.js', 'D3.js', 'C3.js']
  const tools = ['Git', 'Linux', 'Github', 'Gulp', 'Docker']
  const knowledge = [ 'Web Development', 'Data Visualization', 'Data Analysis', 'Deep Learning', 'Computer Vision' ]
  const testingPractices = ['UI-tests', 'Unit-tests']
  const math = ['Algebra', 'Linear Algebra', 'Calculus', 'Probability and Statistics', 'Discrete Mathematics']
  const contact = ['Email', 'LinkedIn', 'Github', 'Twitter', 'Facebook', 'Instagram']
  const skillSetTitle = [
                        'Knowledge:', 
                        'Programming Languages:', 
                        'Machine Learning tools:', 
                        'Front-end Tools:', 
                        'Development Tools:',
                        'Testing Practices:',
                        'Math:',
                      ]
  let idx = -1

  return (
    <div className="container">
      <div className="present-card">
        <h1>Hi, I'm Ahmed Abdelhay from Egypt</h1>
        <h2>I live in Riyadh, Saudi Arabia</h2>
        <p>
          I have a Bachelor degree in <strong>computer engineer.</strong> <br />
        </p>
        <p>
          I work as a junior front-end web developer at a SaSS startup called Visyond <br />
          located in London, UK. <br />
        </p>
        {/* <p>
          I'm a junior front-end web developer, <br />
          I'm a fresh graduate student from Minia university <br />
          faculty of engineering computeter and system department.
        </p> */}
      </div>

      <div className="skills container--flex">
        <h1>Skills</h1>
        {[knowledge, langs, mlTools, FEFrameWork, tools, testingPractices, math].map((skillsSet) => {
          idx += 1
          return (
            <div className="skills-card container--flex" key={idx}>
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
      </div>
    </div>
  )
}

export default About
