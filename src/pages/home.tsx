import personalImage from "../Assets/PersonalImageBlack.png"

const Home = () => {
  return (
    <div className="container container--flex home-page">
      <div className="bio">
        <h2>Hi I'm Ahmed</h2>
        <p>
          I have a bachelor degree in <strong>computer engineer.</strong> <br />
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
          src={personalImage}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </div>
    </div>
  )
}

export default Home
