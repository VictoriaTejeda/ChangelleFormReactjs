import React from "react";

export const Inputs = () => {
  return (
    <div>
      <div className="mb-3 row">
        <label HtmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            class="form-control-plaintext"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
    </div>
  );
};
