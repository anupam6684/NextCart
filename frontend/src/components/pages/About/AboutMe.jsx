import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AboutMe() {
  return (
    <>
      <section className="about-me">
        <div className="about-container2">
          {/* Left Image + Links */}
          <div className="about-image text-center">
            <img src="myPhoto.jpg" alt="Anupam Jana" />

            {/* Links under photo */}
            <div className="photo-links d-flex gap-3 justify-content-center mt-5">
              <a
                href="https://github.com/anupam6684"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anupam-jana/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>

              <a href="mailto:anupamjana6684@gmail.com">
                {" "}
                <MailIcon />
                Email
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-content2">
            <span className="about-role">
              Anupam Jana – MERN Stack Developer
            </span>

            <h2>
              Building modern, scalable <br /> web experiences with React
            </h2>

            <p>
              I am Anupam Jana, a passionate MERN Stack Developer with a strong
              interest in building full-stack web applications using MongoDB,
              Express.js, React, and Node.js. I focus on creating clean,
              responsive, and user-friendly interfaces backed by efficient and
              scalable server-side logic.
            </p>

            <p>
              NextCart is a full-stack eCommerce project developed to
              demonstrate real-world application architecture, RESTful APIs,
              authentication, and modern UI design. My goal is to continuously
              improve performance, security, and code quality while following
              industry best practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
