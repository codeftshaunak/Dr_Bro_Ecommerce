import React from "react";

import { FaRegEye } from "react-icons/fa";
const QuickViewButton = () => {
  return (
    <div>
      <button for="quick-view" className=" hover:text-primary duration-500 ">
        <FaRegEye />
      </button>
    </div>
  );
};

export default QuickViewButton;
