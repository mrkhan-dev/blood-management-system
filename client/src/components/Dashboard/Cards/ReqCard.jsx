/* eslint-disable react/prop-types */
import {MdWaterDrop} from "react-icons/md";
import {MdMoreTime} from "react-icons/md";
import {PiHospital} from "react-icons/pi";
import {HiMiniChatBubbleOvalLeftEllipsis} from "react-icons/hi2";
import DetailsModal from "../Modals/DetailsModal";
import {useState} from "react";
const ReqCard = ({reqPost}) => {
  const [isOpenModal, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  if (reqPost.status === "pending") return;
  const date = new Date().toDateString(reqPost.date);
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg mx-auto">
      <div className="flex justify-center -mt-16 md:justify-end">
        <MdWaterDrop className="relative w-20 h-20 border-2 border-red-500 text-red-500 rounded-full" />
        <p className="absolute mt-8 mr-7 text-white font-semibold">
          {reqPost.bloodGroup}
        </p>
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
        {reqPost.title}
      </h2>

      <div className="flex gap-2 mt-2">
        <PiHospital className="text-2xl text-red-500 " />
        <p className="text-lg font-semibold text-gray-500">
          {reqPost.hospitalName}
        </p>
      </div>

      <div className="flex gap-2 mt-2">
        <MdMoreTime className="text-2xl text-red-500 " />
        <p className="text-lg font-semibold text-gray-500">{date}</p>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
        deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
        commodi hic, suscipit in a veritatis pariatur minus consequuntur!
      </p>

      <div className="flex justify-end mt-4 gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-red-500 text-white"
        >
          Details
        </button>
        <DetailsModal
          isOpenModal={isOpenModal}
          closeModal={closeModal}
          reqPost={reqPost}
          date={date}
        />
        <button className="btn bg-red-500 text-white">
          <HiMiniChatBubbleOvalLeftEllipsis className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ReqCard;
