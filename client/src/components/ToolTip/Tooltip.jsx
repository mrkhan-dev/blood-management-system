const Tooltip = ({children, text, position = "top"}) => {
  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute hidden group-hover:block bg-white shadow-lg text-red-400 text-sm rounded px-2 py-2 ${positionClasses[position]}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
