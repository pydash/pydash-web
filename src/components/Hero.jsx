import "../styles/Hero.css";
import DarkVeil from "./custom/DarkVeil";
import BlurText from "./custom/BlurText";
import ShinyText from "./custom/ShinyText";

function Hero() {
  return (
    <div
      id="home"
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <DarkVeil speed={1}>
        <div className="hero-main-container">
          <div className="name-badge">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              Hi, I am Daniel!
            </button>
          </div>
          <div className="hero-text-container">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <BlurText
                className="hero-text hero-main-text"
                text="Explore my projects ideas and creations"
                delay={50}
              />
              <BlurText
                className="hero-text hero-sub-text"
                text="Welcome to my personal website!"
                delay={50}
              />
            </div>
          </div>
          <div className="hero-cta-container">
            <button className="view-project">
              <a className="hero-cta" href="#">
                View project
              </a>
            </button>
            <button className="contact-me">
              <a className="hero-cta" href="#">
                <ShinyText className="" text="Contact me" />
              </a>
            </button>
          </div>
        </div>
      </DarkVeil>
    </div>
  );
}

export default Hero;
