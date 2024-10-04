import image from "../assets/1673254809664.jpeg";
import {CiCircleCheck} from "react-icons/ci";

const Introduction = () => {
  return (
    <div className="flex mt-28 justify-between gap-28">
      <div>
        <img className="h-96 w-[560px] rounded-md" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-montserrat  font-semibold">Who We Are?</h1>
        <p className="font-poppins text-lg ">
          Donate4Life is a public donation center with blood donation members in
          the changing health care system.
        </p>
        <ul className="mt-2 font-poppins text-lg">
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-green-500" />
            <p>Specialist blood donors and clinical supervision</p>
          </li>
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-green-500" />
            <p>High quality assessment, diagnosis and treatment.</p>
          </li>
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-green-500" />
            <p>Increasing communication with our members.</p>
          </li>
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-green-500" />
            <p>Examine critically to ensure alignment.</p>
          </li>
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-green-500" />
            <p>The extra care of a multi-disciplinary team.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
