import React from "react";
import { CountrySearchInputProps } from "../../types";

const CountrySearchInput: React.FC<CountrySearchInputProps> = ({
  value,
  handleInputChange,
}) => {
  return (
    <input
      type="text"
      name="countrySearch"
      placeholder="enter the country name"
      value={value}
      onChange={(e) => handleInputChange(e)}
      className="border-b bg-white pl-1 focus:border-black focus:outline-none dark:bg-gray-950 dark:focus:border-white"
    />
  );
};

export default CountrySearchInput;
