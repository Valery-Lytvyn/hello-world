import { useState } from "react";

export const useSubmit = (inputValue: string, reset: () => void) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    reset;
  };

  return { searchTerm, handleSubmit };
};
