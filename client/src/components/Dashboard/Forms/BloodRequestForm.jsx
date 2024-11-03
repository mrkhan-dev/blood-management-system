import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const BloodRequestForm = ({bloodGroup}) => {
  const [startDate, setStartDate] = useState(new Date());

  const axiosCommon = useAxiosCommon();
  const {data: districts = []} = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const {data} = await axiosCommon.get("/districts");
      return data;
    },
  });

  console.log(districts);

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

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Post Title"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  // {...register("name", {required: true})}
                />
                {/* {errors.name?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Select Group
                </label>
                <select
                  type="text"
                  name="bloodGroup"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  // {...register("bloodGroup", {required: true})}
                >
                  <option value="" disabled className="text-gray-100">
                    {" "}
                    blood group
                  </option>
                  {bloodGroup.map((group, idx) => (
                    <option key={idx}>{group}</option>
                  ))}
                </select>
                {/* {errors.bloodGroup?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
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
                  // {...register("age", {required: true})}
                />
                {/* {errors.age?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select a date"
                  name="date"
                  dateFormat="MM/dd/yyyy" // Customize the date format as needed
                  className="custom-input w-96 lg:w-80 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" // Add any CSS class to style the input
                />

                {/* {errors.gender?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
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
                  // {...register("phone", {required: true})}
                />
                {/* {errors.phone?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
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
                  // {...register("email", {required: true})}
                />
                {/* {errors.email?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  placeholder="Patient phone number"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  // onChange={handleDistrictChange}
                  // {...register("district", {required: true})}
                />

                {/* {errors.district?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  District
                </label>
                <select
                  type="text"
                  name="district"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="" disabled className="disabled:text-gray-600">
                    Select district
                  </option>
                  {districts.map((district) => (
                    <option key={district._id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
                {/* {errors.bloodGroup?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Upazila
                </label>
                <select
                  type="text"
                  name="bloodGroup"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  // {...register("bloodGroup", {required: true})}
                >
                  <option value="" disabled className="text-gray-100">
                    {" "}
                    Select upazila
                  </option>
                </select>
                {/* {errors.bloodGroup?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )} */}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Descriptions
                </label>
                <textarea
                  name="descriptions"
                  placeholder="Why do you need blood"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  // disabled={!selectedDistrict} // Disable if no district is selected
                ></textarea>
              </div>

              <button
                //   disabled={loading}
                className="flex disabled:bg-rose-400 items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF4747] rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                dist Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodRequestForm;
