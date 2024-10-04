import Banner from "../../components/Banner";
import Introduction from "../../components/intro";
import Navbar from "../../shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="w-[81vw] mx-auto">
        <Introduction />
      </div>
    </div>
  );
};

export default Home;
