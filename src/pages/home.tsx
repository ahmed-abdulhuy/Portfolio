import homeLogo from "../Assets/home-main.svg"

const Home = () => {
  return (
    <div className="container container--flex home-page">
      <div className="bio">
        <h2>Hi I'm Ahmed</h2>
        <p>
          I'm a fresh graduate <strong>computer engineer.</strong> <br />
          Passionate about solving tech problems <br />
          Mainly interested in{' '}
          <strong>
            machine learning,
            web development, and robotics.
          </strong>
        </p>
      </div>
      <div className="home-svg">
        <img
          src={homeLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </div>
    </div>
  )
}

export default Home
