import React from "react";

import "./SelectBar.css";

const SelectBar = ({ item, setSelectBodyPart, selectBodyPart }) => {
  return (
    <div>
      <div
        onClick={() => {
          setSelectBodyPart(item);
        }}
        className={selectBodyPart === item ? "focused" : "bodyParts_name"}
      >
        {item}
      </div>
    </div>
  );
};

export default SelectBar;
