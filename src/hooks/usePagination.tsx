import { useCallback, useState } from "react";
import { ITEMS_PER_PAGE } from "../constants";
import { Country } from "../types";

export const usePagination = (countries: Country[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCountries = countries.slice(startIndex, endIndex);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);
  return { totalPages, currentCountries, handlePageChange, currentPage };
};
