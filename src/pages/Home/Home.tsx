import "./Home.scss";
import homePhoto from "src/pages/Home/home photo.jpg";

function Home() {
  return (
    <div>
      <img src={require(homePhoto)} alt="home photo"></img>
    </div>
  );
}

export default Home;
