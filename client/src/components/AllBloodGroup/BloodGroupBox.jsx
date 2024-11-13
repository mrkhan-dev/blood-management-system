/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {MdWaterDrop} from "react-icons/md";
import queryString from "query-string";
import {useNavigate, useSearchParams} from "react-router-dom";

const BloodGroupBox = ({label}) => {
  const [params, setParams] = useSearchParams();
  const bloodGroup = params.get("bloodGroup");
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {bloodGroup: label};
    const url = queryString.stringifyUrl({
      url: "/dashboard/blood-requests",
      query: currentQuery,
    });
    navigate(url);
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2  relative md:p-4 rounded-lg cursor-pointer ${
        bloodGroup === label && "border-red-500"
      }`}
    >
      <MdWaterDrop
        className={`text-6xl ${bloodGroup === label && "text-red-600"} `}
      />
      <div className="text-sm text-white font-medium absolute mt-[-40px] ml-[21px]">
        {label}
      </div>
    </div>
  );
};

export default BloodGroupBox;
