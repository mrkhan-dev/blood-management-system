/* eslint-disable react/prop-types */
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import {Fragment} from "react";
import {BsDropletFill} from "react-icons/bs";
import {BiSolidDonateBlood} from "react-icons/bi";
import {FaCalendarAlt} from "react-icons/fa";
import {PiHospitalFill} from "react-icons/pi";
import {RiUser3Fill} from "react-icons/ri";
import {MdPhoneInTalk} from "react-icons/md";
import {HiLocationMarker} from "react-icons/hi";

const DetailsModal = ({isOpenModal, closeModal, reqPost, date}) => {
  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-[#000000]"
                >
                  {reqPost.title}
                </DialogTitle>
                <div className="mt-2">
                  <p className="flex items-center text-xl gap-2">
                    {" "}
                    <BsDropletFill className="text-red-500 text-2xl" /> Blood
                    Group : {reqPost.bloodGroup}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <BiSolidDonateBlood className="text-2xl text-red-500" />{" "}
                    Quantity : {reqPost.quantity}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <RiUser3Fill className="text-2xl text-red-500" /> Patient
                    Name : {reqPost.patientName}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <MdPhoneInTalk className="text-2xl text-red-500" /> Phone :{" "}
                    {reqPost.phoneNumber}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <FaCalendarAlt className="text-2xl text-red-500" /> Donation
                    Date : {date}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <PiHospitalFill className="text-2xl text-red-500" />{" "}
                    Hospital Name : {reqPost.hospitalName}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <HiLocationMarker className="text-2xl text-red-500" />{" "}
                    District : {reqPost.district}{" "}
                  </p>
                  <p className="text-xl flex items-center gap-2">
                    {" "}
                    <HiLocationMarker className="text-2xl text-red-500" />{" "}
                    Upazila : {reqPost.upazila}{" "}
                  </p>
                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    OK
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DetailsModal;
