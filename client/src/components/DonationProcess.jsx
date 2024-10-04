import reg from "../assets/regiatration.jpeg";
import screening from "../assets/SCREENING.jpg";
import donation from "../assets/donation.jpeg";

const DonationProcess = () => {
  return (
    <div className="bg-[#FAF9F6] w-full mt-24">
      <h1 className="text-4xl font-montserrat text-center font-semibold pt-20">
        Donation Process
      </h1>
      <p className="text-2xl font-montserrat text-[#444444] text-center mt-4">
        The donation process from the time you arrive center until the time you
        leave
      </p>
      <div className="w-[81vw]  mx-auto md:flex justify-between mt-8">
        <div className="h-96 w-[450px]">
          <img
            className=" w-[450px] rounded-t-lg h-72 relative"
            src={reg}
            alt="image"
          />
          <p className="bg-red-500 opacity-55 text-white text-2xl font-semibold text-center w-20 h-10 absolute mt-[-288px] ml-[370px] rounded-tr-lg rounded-bl-md">
            1
          </p>
          <h2 className="text-3xl text-[#333333] mt-3 uppercase font-semibold font-montserrat">
            registrations
          </h2>
          <p className="mt-4 text-lg text-[#4D4D4D] font-poppins">
            You need to complete a very simple registration form. Which contains
            all required contact information to enter in the donation process.
          </p>
        </div>
        <div className="h-96 w-[450px]">
          <img className="w-[450px] h-72 rounded-t-lg" src={screening} alt="" />
          <p className="bg-red-500 opacity-55 text-white text-2xl font-semibold text-center w-20 h-10 absolute mt-[-288px] ml-[370px] rounded-tr-lg rounded-bl-md">
            2
          </p>
          <h2 className="text-3xl text-[#333333] mt-3 uppercase font-semibold font-montserrat">
            screening
          </h2>
          <p className="mt-4 text-lg text-[#4D4D4D] font-poppins">
            A drop of blood from your finger will take for simple test to ensure
            that your blood iron levels are proper enough for donation process.
          </p>
        </div>
        <div className="h-96 w-[450px]">
          <img className=" w-[450px] h-72 rounded-t-lg" src={donation} alt="" />
          <p className="bg-red-500 opacity-55 text-white text-2xl font-semibold text-center w-20 h-10 absolute mt-[-288px] ml-[370px] rounded-tr-lg rounded-bl-md">
            3
          </p>
          <h2 className="text-3xl text-[#333333] mt-3 uppercase font-semibold font-montserrat">
            donation
          </h2>
          <p className="mt-4 text-lg text-[#4D4D4D] font-poppins">
            After ensuring and passed screening test successfully you will be
            directed to a donor bed for donation. It will take only 6-10
            minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationProcess;
