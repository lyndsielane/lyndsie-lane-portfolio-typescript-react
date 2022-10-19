import "./Home.scss";
import homePhoto from "/src/home photo.jpg";

function Home() {
  return (
    <div className="Home">
      <img src={homePhoto} alt="home photo"></img>
    </div>
  );
}

export default Home;
