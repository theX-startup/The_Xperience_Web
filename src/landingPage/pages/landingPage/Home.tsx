import AnimatedPage from "../../../utils/AnimatedPage";
import Card from "../../Components/Card";
import Cards from "../../Components/Cards";
import Header from "../../Components/Header";
import InternshipSec from "../../Components/InternshipSec";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="">
        <Header />
        <InternshipSec />
        <Card />
        <Cards />
      </div>
    </AnimatedPage>
  );
};

export default Home;
