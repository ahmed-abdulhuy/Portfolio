import { Link } from 'react-router-dom'

const NaveBar = () => {
  const routBase = 'Portfolio'

  return (
    <div className="nave-bar">
      <Link className="link" to={`${routBase}/`}>
        Home
      </Link>
      <Link className="link" to={`${routBase}/about`}>
        About
      </Link>
      <Link className="link" to={`${routBase}/projects`}>
        Projects
      </Link>
      <Link className="link" to={`${routBase}/resume`}>
        Resume
      </Link>

    </div>
  )
}

export default NaveBar
