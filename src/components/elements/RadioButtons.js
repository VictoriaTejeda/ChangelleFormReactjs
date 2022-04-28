import React from "react";

const RadioButtons = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Default radio
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
