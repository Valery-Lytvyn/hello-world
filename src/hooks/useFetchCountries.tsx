import { useEffect, useState } from "react";
import { Country } from "../types";
import axios from "axios";
import { REST_COUNTRIES_BASE_URL } from "../constants/index";

const useFetchCountries = (endpoint: string, searchedCountry: string) => {
  const [fetchedCountries, setFetchedCountries] = useState<Country[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const { data } = await axios.get(
          `${REST_COUNTRIES_BASE_URL}${endpoint}`,
        );
        setFetchedCountries(data);
      } catch (error) {
        console.error("Error fetching countries", error);
        setFetchError(
          `No country found that contains ${searchedCountry}  in its name`,
        );
        setFetchedCountries([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountriesData();
  }, [endpoint]);

  return { fetchedCountries, fetchError, isLoading };
};

export default useFetchCountries;
