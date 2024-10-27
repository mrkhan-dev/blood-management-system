import {useEffect, useState} from "react";
// import image from "../../../assets/donation.jpg";
const DonateBlood = () => {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    // Fetch districts
    fetch("/district.json")
      .then((res) => res.json())
      .then((data) =>
        Array.isArray(data)
          ? setDistricts(data)
          : console.error("District data is not an array")
      )
      .catch((error) => console.error("Error fetching district data:", error));

    // Fetch upazilas and extract the actual data array
    fetch("/upazilas.json")
      .then((res) => res.json())
      .then((data) => {
        const upazilaTable = data.find(
          (item) => item.type === "table" && item.name === "upazilas"
        );
        if (upazilaTable && Array.isArray(upazilaTable.data)) {
          setUpazilas(upazilaTable.data);
        } else {
          console.error("Upazila data is not in the expected format");
        }
      })
      .catch((error) => console.error("Error fetching upazila data:", error));
  }, []);

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrict(districtId);

    // Only attempt to filter if upazilas is an array
    if (Array.isArray(upazilas)) {
      const filtered = upazilas.filter(
        (upazila) => upazila.district_id === districtId
      );
      setFilteredUpazilas(filtered);
    } else {
      console.error("Upazilas data is not an array");
    }
  };

  const bloodGroup = [
    "A",
    "B",
    "AB",
    "O",
    "A+",
    "B+",
    "AB+",
    "O+",
    "A-",
    "B-",
    "AB-",
    "O-",
  ];

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

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40    "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Blood Group
                </label>
                <select
                  type="text"
                  name="blood-group"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option disabled value="">
                    Select your blood group
                  </option>
                  {bloodGroup.map((group, idx) => (
                    <option key={idx}>{group}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">Age</label>
                <input
                  type="text"
                  name="age"
                  //   placeholder="XXX-XX-XXXX-XXX"
                  placeholder="Age"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
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
                />
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
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 ">
                  District
                </label>
                <select
                  name="district"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleDistrictChange}
                >
                  <option value="">Select District</option>
                  {districts[2]?.data.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
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

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF4747] rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Continue . . . </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateBlood;
