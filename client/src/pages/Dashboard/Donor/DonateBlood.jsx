import {useMutation} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import {ImSpinner} from "react-icons/im";
import BloodDonationForm from "../../../components/Dashboard/Forms/BloodDonationForm";
// import image from "../../../assets/donation.jpg";
const DonateBlood = () => {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const {user} = useAuth();
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

  const genders = ["Male", "Female"];

  const {mutateAsync} = useMutation({
    mutationFn: async (donorData) => {
      const data = await axiosCommon.post(`/donation-post`, donorData);
      return data;
    },
    onSuccess: () => {
      setLoading(false);
      console.log("data posted successful");
      toast.success("Your post submitted");
      navigate("/dashboard");
    },
  });

  // form validation and submissions
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const {name, bloodGroup, age, gender, phone, email, district} = data;

    try {
      setLoading(true);
      const donorData = {
        name,
        bloodGroup,
        age,
        gender,
        phone,
        email,
        district,
        donor: {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
        },
      };
      await mutateAsync(donorData);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <BloodDonationForm
      districts={districts}
      setDistricts={setDistricts}
      upazilas={upazilas}
      setUpazilas={setUpazilas}
      filteredUpazilas={filteredUpazilas}
      selectedDistrict={selectedDistrict}
      loading={loading}
      setLoading={setLoading}
      handleDistrictChange={handleDistrictChange}
      bloodGroup={bloodGroup}
      genders={genders}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default DonateBlood;
