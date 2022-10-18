import "./Portfolio.scss";
import { PortfolioItem } from "../../components";

function Portfolio() {
  return (
    <div className="Portfolio">
      <PortfolioItem
        imgSrc="https://dummyimage.com/200x300/545f66/d0f4ea"
        alt="Project 1"
        techStack="HTML, CSS, JavaScript"
        githubRepo="#"
      />
      <PortfolioItem
        imgSrc="https://dummyimage.com/200x300/545f66/d0f4ea"
        alt="Project 2"
        techStack="React, HTML, SCSS"
        githubRepo="#"
      />
      <PortfolioItem
        imgSrc="https://dummyimage.com/200x300/545f66/d0f4ea"
        alt="Project 3"
        techStack="Node.js, React, MongoDB"
        githubRepo="#"
      />
    </div>
  );
}

export default Portfolio;
