import React, { useState } from "react";

const useInput = (initialValue: string = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const reset = () => {
    setInputValue("");
  };

  return {
    inputValue,
    handleInputChange,
    reset,
  };
};

export default useInput;
