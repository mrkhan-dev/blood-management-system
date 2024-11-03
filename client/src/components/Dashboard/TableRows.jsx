import {useState} from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import UpdateUserRoleModal from "./Modals/UpdateUserRole";

/* eslint-disable react/prop-types */
const UserDataRows = ({user, refetch}) => {
  const {user: loggedInUser} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {mutateAsync} = useMutation({
    mutationFn: async (role) => {
      const {data} = await axiosSecure.patch(
        `/users/role/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      setIsOpen(false);
      toast.success("User role updated successful.");
    },
  });

  // handle update modal
  const modalHandler = async (selected) => {
    if (loggedInUser.email === user.email) {
      toast.error("action not allowed");
      return setIsOpen(false);
    }
    const userRole = {
      role: selected,
      status: "verified",
    };
    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <td className="px-4 py-4 text-base text-gray-500 whitespace-nowrap">
          {user.email}
        </td>
      </td>
      <td className="px-4 py-4 text-base text-gray-500 whitespace-nowrap">
        {user.role}
      </td>

      <td className="px-12 mt-4 flex py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {user?.status ? (
          <p
            className={`${
              user.status === "verified"
                ? " text-base font-normal text-emerald-500"
                : " text-red-400 text-base"
            } whitespace-nowrap `}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => setIsOpen(true)}
            className="px-3 py-1 text-base text-indigo-500 rounded-full bg-indigo-100/60"
          >
            Update Role
          </button>

          <UpdateUserRoleModal
            isOpen={isOpen}
            refetch={refetch}
            user={user}
            setIsOpen={setIsOpen}
            modalHandler={modalHandler}
          />

          <button className="px-3 py-1 text-base text-pink-500 rounded-full bg-pink-100/60">
            Delete User
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserDataRows;
