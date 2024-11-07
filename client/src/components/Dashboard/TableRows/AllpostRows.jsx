/* eslint-disable react/prop-types */
import {useState} from "react";
import {MdCreditScore} from "react-icons/md";
import {FaDeleteLeft} from "react-icons/fa6";
import {FaRegEye} from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Tooltip from "../../ToolTip/Tooltip";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import UpdatePostStatusModal from "../Modals/UpdatePostStatusModal";

const AllPostRows = ({post, refetch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {mutateAsync} = useMutation({
    mutationFn: async (status) => {
      const data = await axiosSecure.patch(`/post/status/${post._id}`, status);
      return data;
    },
    onSuccess: () => {
      refetch();
      setIsOpen(false);
      toast.success("This post approved successful");
    },
  });

  // handle update modal
  const modalHandler = async (selected) => {
    console.log(selected);
    const changeStatus = {
      status: selected,
    };
    try {
      await mutateAsync(changeStatus);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <td className="px-4 py-4 text-base text-gray-500 whitespace-nowrap">
          {post?.email}
        </td>
      </td>
      <td className="px-4 py-4 text-base text-gray-500 whitespace-nowrap">
        {post?.title}
      </td>
      <td className="px-4 py-4 text-base text-gray-500 whitespace-nowrap">
        {post?.bloodGroup}
      </td>
      <td className="px-12 py-4 text-base text-gray-500 whitespace-nowrap">
        {post?.status ? (
          <p
            className={`${
              post.status === "approved"
                ? " text-base font-normal text-emerald-500"
                : " text-red-400 text-base"
            } whitespace-nowrap `}
          >
            {post.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>
      <td className="px-4 py-4 text-base text-gray-500 whitespace-nowrap">
        {post?.quantity}
      </td>
      <td className="pl-20 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <Tooltip text="Update Status" position="top">
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-1 text-base text-emerald-500 rounded-full bg-emerald-100/60"
            >
              <MdCreditScore className="text-2xl" />
            </button>
          </Tooltip>
          <UpdatePostStatusModal
            post={post}
            refetch={refetch}
            isOpen={isOpen}
            modalHandler={modalHandler}
            setIsOpen={setIsOpen}
          />
          <button className="px-3 py-1 text-base text-indigo-500 rounded-full bg-indigo-100/60">
            <FaRegEye />
          </button>

          <button className="px-3 py-1 text-base text-pink-500 rounded-full bg-pink-200/60">
            <FaDeleteLeft />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AllPostRows;
