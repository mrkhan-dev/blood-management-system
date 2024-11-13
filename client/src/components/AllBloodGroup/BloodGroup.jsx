import {bloodGroupData} from "./BloodGroupData.js";
import BloodGroupBox from "./BloodGroupBox";
const BloodGroup = () => {
  console.log(bloodGroupData);
  return (
    <div className="flex mt-4 gap-8 items-center justify-center overflow-x-auto">
      {bloodGroupData.map((group) => (
        <BloodGroupBox
          key={group.label}
          label={group.label}
          icon={group.icon}
        />
      ))}
    </div>
  );
};

export default BloodGroup;
