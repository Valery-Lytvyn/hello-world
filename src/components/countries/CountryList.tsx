import React, { memo } from "react";
import { CountryListProps } from "../../types";
import CountryTile from "./CountryTile";
import Pagination from "../pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";

const CountryList: React.FC<CountryListProps> = memo(({ countries }) => {
  const { totalPages, currentCountries, handlePageChange, currentPage } =
    usePagination(countries);
  console.log("rendering country list");
  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-16 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {currentCountries.map((country) => (
          <CountryTile country={country} key={country.name.common} />
        ))}
      </div>
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
});

export default CountryList;
