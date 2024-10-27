import {Link} from "react-router-dom";

const JoinWithUs = () => {
  return (
    <div className="bg-[] mt-24">
      <div className="bg-[] py-24 w-[81vw] mx-auto shadow-lg">
        <h1 className="text-3xl font-montserrat font-semibold text-center">
          Become A Part Of Great Work Today
        </h1>
        <p className="text-center font-poppins text-lg mt-6  text-[#11111]">
          You can give blood at any of our blood donation venues all over the
          world. <br /> We have total sixty thousands donor centers and visit
          thousands of other venues on various occasions.
        </p>
        <div className="flex justify-center mt-8">
          <Link to="/signUp">
            <button className="uppercase font-montserrat bg-[#FF4747] text-white px-11 hover:bg-white hover:text-[#FF4747] hover:border-red-500 hover:border-2 hover:rounded-md py-8 text-lg font-semibold">
              join with us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
