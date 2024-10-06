import useProcess from "../hooks/useProcess";

const DonationProcess = () => {
  const [allProcess] = useProcess();

  return (
    <div className="bg-[#FAF9F6] w-full mt-24">
      <h1 className="text-4xl font-montserrat text-center font-semibold pt-20">
        Donation Process
      </h1>
      <p className="text-2xl font-montserrat text-[#444444] text-center mt-4">
        The donation process from the time you arrive center until the time you
        leave
      </p>
      <div className="w-[81vw]  mx-auto md:flex justify-between py-20">
        {allProcess.map((process, i) => (
          <div key={process._id} className="h-96 w-[450px]">
            <img
              className=" w-[450px] rounded-t-lg h-72 relative"
              src={process.image}
              alt="image"
            />
            <p className="bg-red-500 opacity-55 text-white text-2xl font-semibold text-center w-20 h-10 absolute mt-[-288px] ml-[370px] rounded-tr-lg rounded-bl-md">
              {i + 1}
            </p>
            <h2 className="text-3xl text-[#333333] mt-3 uppercase font-semibold font-montserrat">
              {process.processName}
            </h2>
            <p className="mt-4 text-lg text-[#4D4D4D] font-poppins pb-8">
              {process.processDetails}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationProcess;
