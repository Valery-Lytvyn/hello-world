import React from "react";
import CountryList from "./components/countries/CountryList";
import Header from "./components/header/Header";
import CountrySearchInput from "./components/countrySearchInput/CountrySearchInput";
import useFetchCountries from "./hooks/useFetchCountries";
import SearchButton from "./components/ui/SearchButton";
import useInput from "./hooks/useInput";
import { useSubmit } from "./hooks/useSubmit";

const App: React.FC = () => {
  const { inputValue, handleInputChange, reset } = useInput("");
  const { searchTerm, handleSubmit } = useSubmit(inputValue, reset);
  const { fetchedCountries, fetchError, isLoading } = useFetchCountries(
    searchTerm ? `name/${searchTerm}` : "all",
    inputValue,
  );
  console.log("rendering App");

  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center justify-center gap-1 p-5 sm:mt-8"
      >
        <CountrySearchInput
          value={inputValue}
          handleInputChange={handleInputChange}
        />
        <SearchButton />
      </form>
      <div className="p-5">
        {isLoading && <p>Loading...</p>}
        {fetchError && <p>{fetchError}</p>}
      </div>
      <CountryList countries={fetchedCountries} />
    </div>
  );
};

export default App;
