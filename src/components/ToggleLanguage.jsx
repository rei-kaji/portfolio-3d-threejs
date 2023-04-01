import React, { useState } from "react";
import Switch from "react-switch";

import { jp, en } from "../constants";

function ToggleLanguage() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const enIcon = (
    <img
      src={en}
      alt="en"
      className="w-4 h-4 object-contain mt-[4px] mx-auto"
    />
  );
  const jpIcon = (
    <img
      src={jp}
      alt="jp"
      className="w-4 h-4 object-contain mt-[4px] mx-auto"
    />
  );
  return (
    <div>
      <label
        htmlFor="toggle-button"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <Switch
            id="toggle-button"
            checked={checked}
            onChange={handleChange}
            onColor="#007ACC"
            offColor="#D71F36"
            // onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            uncheckedHandleIcon={jpIcon}
            checkedIcon={false}
            checkedHandleIcon={enIcon}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={30}
            // width={65}
          />
        </div>
        {/* <div className="ml-3 text-gray-700 font-medium">Toggle Button</div> */}
      </label>
    </div>
  );
}

export default ToggleLanguage;
