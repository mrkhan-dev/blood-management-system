import BloodRequestForm from "../../../components/Dashboard/Forms/BloodRequestForm";

const CreateBloodRequest = () => {
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

  return <BloodRequestForm bloodGroup={bloodGroup} />;
};

export default CreateBloodRequest;
