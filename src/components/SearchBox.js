import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div>
      <input
        className="pa3 ma2 ba b--green bw1 bg-lightest-blue"
        type={"search"}
        placeholder={"Search Robots"}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
