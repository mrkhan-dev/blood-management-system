import {BiSolidDonateBlood} from "react-icons/bi";
import MenuItem from "./MenuItem";
import {IoMdAddCircle} from "react-icons/io";
import DonorRequest from "../Modals/DonorRequest";
import {useState} from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const RecipientMenu = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const closeModal = () => {
    setIsOpenModal(false);
  };

  // modal handler
  const modalHandler = async () => {
    console.log("i want to be a donor");
    closeModal();
    try {
      const currentUser = {
        email: user?.email,
        role: "recipient",
        status: "requested",
      };
      const {data} = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(
          "Your request is pending. Please wait for admin approval"
        );
      } else {
        toast.success("Please Wait for admin approval");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <MenuItem
        label="Create Blood Request"
        icon={IoMdAddCircle}
        address="create-blood-request"
      />
      <button
        onClick={() => {
          setIsOpenModal(true);
        }}
        className="flex items-center w-full px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#ffdada]   hover:text-gray-700 cursor-pointer"
      >
        <div className="bg-[#ffdada] h-10 w-10 rounded-full ">
          <BiSolidDonateBlood className="w-6 h-6 flex mt-2 ml-2  text-[#ff4747]" />
        </div>

        <span className="mx-4 font-medium">Become A Donor</span>
      </button>
      <DonorRequest
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </>
  );
};

export default RecipientMenu;
