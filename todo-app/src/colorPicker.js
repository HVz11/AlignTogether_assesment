import React from "react";

const ColorPicker = ({ color, setColor }) => {
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <input
      type="color"
      value={color}
      onChange={handleColorChange}
      style={{ marginLeft: "10px" }}
    />
  );
};

export default ColorPicker;
