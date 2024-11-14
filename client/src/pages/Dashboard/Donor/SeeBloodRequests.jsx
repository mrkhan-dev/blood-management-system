/* eslint-disable no-unused-vars */
import {useSearchParams} from "react-router-dom";
import BloodGroup from "../../../components/AllBloodGroup/BloodGroup";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import {useQuery} from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/Spinner";
import ReqCard from "../../../components/Dashboard/Cards/ReqCard";

const SeeBloodRequests = () => {
  const axiosCommon = useAxiosCommon();
  const [params, setParams] = useSearchParams();

  const bloodGroup = params.get("bloodGroup");
  const encodedBloodGroup = encodeURIComponent(bloodGroup);

  const {data: post = [], isLoading} = useQuery({
    queryKey: ["post", bloodGroup],
    queryFn: async () => {
      const {data} = await axiosCommon.get(
        `/all-post?bloodGroup=${encodedBloodGroup}`
      );
      return data;
    },
  });

  const sortedPost = [...post].reverse();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <div className="w-full  sticky ">
        <h1 className="text-xl font-semibold px-4">All Blood Requests</h1>
        <BloodGroup />
        {sortedPost && sortedPost.length > 0 ? (
          <div className="md:grid md:grid-cols-3">
            {sortedPost.map((reqPost) => (
              <ReqCard key={reqPost._id} reqPost={reqPost} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center min-h-[calc(100vh-300px)]">
            <h1 className="text-center text-2xl font-bold">
              No Post Available In This Blood Group!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeeBloodRequests;
