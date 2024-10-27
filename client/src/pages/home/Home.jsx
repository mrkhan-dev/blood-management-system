import Banner from "../../components/Banner";
import DonationProcess from "../../components/DonationProcess";
import Introduction from "../../components/intro";
import JoinWithUs from "../../components/joinWithUs";
import Container from "../../components/Shared/Container";
// import useProcess from "../../hooks/useProcess";
import Navbar from "../../shared/Navbar";
// import {Bars} from "react-loader-spinner";
const Home = () => {
  // const [loading] = useProcess();

  return (
    <div>
      <Navbar />
      <Banner />
      <Container>
        <Introduction />
      </Container>
      <DonationProcess />
      <JoinWithUs />
    </div>
  );
};

export default Home;
