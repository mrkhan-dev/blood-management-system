/* eslint-disable react/prop-types */
const UserDataRows = ({user, refetch}) => {
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {user.email}
        </td>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {user.role}
      </td>

      <td className="px-12 mt-4 flex py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {user?.status ? (
          <p
            className={`${
              user.status === "verified"
                ? " text-sm font-normal text-emerald-500"
                : " text-red-400"
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
          <button className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">
            Update Role
          </button>

          <button className="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">
            Delete User
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserDataRows;
