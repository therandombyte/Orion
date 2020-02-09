import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      style={{ width: 300 }}
      name="query"
      className="form-control"
      placeholders="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
