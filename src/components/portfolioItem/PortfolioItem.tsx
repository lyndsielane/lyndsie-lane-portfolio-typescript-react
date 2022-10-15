import "./PortfolioItem.scss";
import { AiFillGithub } from "react-icons/ai";

interface PortfolioItemProps {
  imgSrc: string;
  techStack: string;
  githubRepo: string;
}

function PortfolioItem(props: PortfolioItemProps) {
  return (
    <div className="PortfolioItem">
      <img src={props.imgSrc} />
      <a className="details" href={props.githubRepo} target="_blank">
        <AiFillGithub className="icon" />
        <span className="techStack">{props.techStack}</span>
      </a>
    </div>
  );
}

export default PortfolioItem;
