import useAxiosCommon from "./useAxiosCommon";
import {useQuery} from "@tanstack/react-query";

const useProcess = () => {
  const axiosCommon = useAxiosCommon();
  const {data: allProcess = [], isLoading: loading} = useQuery({
    queryKey: ["allProcess"],
    queryFn: async () => {
      const res = await axiosCommon.get("/donationProcess");
      return res.data;
    },
  });
  return [allProcess, loading];
};

export default useProcess;
