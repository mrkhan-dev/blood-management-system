import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/Spinner";
import UserDataRows from "../../../components/Dashboard/TableRows/TableRows";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  // fetch user data
  const {
    data: user = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {data} = await axiosSecure.get(`/users`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800">Team members</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
            {user.length}
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border-y-2 border-gray-200 shadow-sm  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    {/* table row */}
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-base font-normal text-left rtl:text-right text-gray-700"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Email</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-700 "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Role</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-base font-normal text-left rtl:text-right text-gray-700"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-700 "
                      >
                        Actions
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* table rows */}
                    {user?.map((user) => (
                      <UserDataRows
                        key={user._id}
                        user={user}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageUsers;
