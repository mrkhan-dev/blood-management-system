import {ImSpinner2} from "react-icons/im";
import PropTypes from "prop-types";

const LoadingSpinner = ({smallHeight}) => {
  return (
    <div
      className={`${smallHeight ? "h-[250px]" : "h-[70vh]"}
            flex
            flex-col
            justify-center
            items-center
        `}
    >
      <ImSpinner2 className="animate-spin" size={100} color="red" />
    </div>
  );
};

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
};

export default LoadingSpinner;
