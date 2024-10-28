import {ImSpinner} from "react-icons/im";

const BloodDonationForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  bloodGroup,
  genders,
  handleDistrictChange,
  districts,
  selectedDistrict,
  filteredUpazilas,
  loading,
}) => {
  return (
    <section className="bg-white  min-h-screen border">
      <div className="flex justify-center min-h-screen">
        {/* <div
          className="hidden bg-cover lg:block lg:w-2/4"
          style={{backgroundImage: "url(" + image + ")"}}
        ></div> */}

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Donate Blood & Save Life
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
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("name", {required: true})}
                />
                {errors.name?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Blood Group
                </label>
                <select
                  type="text"
                  name="bloodGroup"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("bloodGroup", {required: true})}
                >
                  <option value="">Select your blood group</option>
                  {bloodGroup.map((group, idx) => (
                    <option key={idx}>{group}</option>
                  ))}
                </select>
                {errors.bloodGroup?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">Age</label>
                <input
                  type="text"
                  name="age"
                  //   placeholder="XXX-XX-XXXX-XXX"
                  placeholder="Age"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("age", {required: true})}
                />
                {errors.age?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Gender
                </label>
                <select
                  type="text"
                  name="gender"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("gender", {required: true})}
                >
                  <option value="">Select your gender</option>
                  {genders.map((gender, idx) => (
                    <option key={idx}>{gender}</option>
                  ))}
                </select>
                {errors.gender?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("phone", {required: true})}
                />
                {errors.phone?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("email", {required: true})}
                />
                {errors.email?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  District
                </label>
                <select
                  name="district"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleDistrictChange}
                  {...register("district", {required: true})}
                >
                  <option value="">Select District</option>
                  {districts[2]?.data.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
                {errors.district?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Upazila
                </label>
                <select
                  name="upazila"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  disabled={!selectedDistrict} // Disable if no district is selected
                >
                  <option value="">Select Upazila</option>
                  {filteredUpazilas.map((upazila) => (
                    <option key={upazila.id} value={upazila.id}>
                      {upazila.name}
                    </option>
                  ))}
                </select>
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

export default BloodDonationForm;
