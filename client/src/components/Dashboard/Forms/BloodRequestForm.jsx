/* eslint-disable react/prop-types */
import {useMutation, useQuery} from "@tanstack/react-query";
import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ImSpinner} from "react-icons/im";
import useAuth from "../../../hooks/useAuth";

const BloodRequestForm = ({bloodGroup}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {user} = useAuth();

  const axiosCommon = useAxiosCommon();
  const {data: districts = []} = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const {data} = await axiosCommon.get("/districts");
      return data;
    },
  });

  const {mutateAsync} = useMutation({
    mutationFn: async (donorData) => {
      const data = await axiosCommon.post(`/request-post`, donorData);
      return data;
    },
    onSuccess: () => {
      setLoading(false);
      console.log("data posted successful");
      toast.success("Your post submitted");
      navigate("/dashboard");
    },
  });

  const {
    register,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      title,
      bloodGroup,
      quantity,
      date,
      hospitalName,
      patientName,
      phoneNumber,
      district,
      upazila,
      descriptions,
    } = data;
    try {
      setLoading(true);
      const requestData = {
        title,
        bloodGroup,
        quantity,
        date,
        hospitalName,
        patientName,
        phoneNumber,
        district,
        upazila,
        descriptions,
        email: user?.email,
        status: "pending",
      };
      console.table(requestData);
      await mutateAsync(requestData);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="bg-white  min-h-screen">
      <div className="flex justify-center min-h-screen">
        {/* <div
            className="hidden bg-cover lg:block lg:w-2/4"
            style={{backgroundImage: "url(" + image + ")"}}
          ></div> */}

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Create Blood Request
            </h1>

            <p className="mt-4 text-gray-500 ">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Post Title"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("title", {required: true})}
                />
                {errors.title?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Title is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Select Group
                </label>
                <select
                  type="text"
                  name="bloodGroup"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("bloodGroup", {required: true})}
                >
                  <option value="" className=" cursor-not-allowed">
                    {" "}
                    blood group
                  </option>
                  {bloodGroup.map((group, idx) => (
                    <option key={idx}>{group}</option>
                  ))}
                </select>
                {errors.bloodGroup?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Blood group is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Amount of Blood
                </label>
                <input
                  type="text"
                  name="quantity"
                  //   placeholder="XXX-XX-XXXX-XXX"
                  placeholder="Type how much"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("quantity", {required: true})}
                />
                {errors.quantity?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {" "}
                    Blood amount is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setValue("date", date, {shouldValidate: true});
                  }}
                  placeholderText="Select a date"
                  dateFormat="MM/dd/yyyy" // Customize the date format as needed
                  className="custom-input w-96 lg:w-80 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" // Add any CSS class to style the input
                />
                {errors.date?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {" "}
                    Date is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Hospital Name
                </label>
                <input
                  type="text"
                  name="hospitalName"
                  placeholder="Hospital Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("hospitalName", {required: true})}
                />
                {errors.hospitalName?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Hospital name is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  placeholder="Patient Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("patientName", {required: true})}
                />
                {errors.patientName?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Patient name is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  placeholder="Patient phone number"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("phoneNumber", {required: true})}
                />

                {errors.phoneNumber?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Phone number is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  District
                </label>
                <select
                  name="district"
                  {...register("district", {required: true})}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                >
                  <option value="">Select district</option>
                  {districts.map((district) => (
                    <option key={district._id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
                {errors.district?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    District is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Upazila
                </label>
                <input
                  name="upazila"
                  placeholder="Upazila"
                  {...register("upazila", {required: true})}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                />
                {errors.upazila?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Upazila is required
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Descriptions
                </label>
                <textarea
                  name="descriptions"
                  {...register("descriptions", {required: true})}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
                {errors.upazila?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Descriptions is required
                  </p>
                )}
              </div>

              <button
                disabled={loading}
                className="flex disabled:bg-rose-400 items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF4747] rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                {loading ? (
                  <ImSpinner className="animate-spin m-auto" />
                ) : (
                  "Continue . . ."
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodRequestForm;
