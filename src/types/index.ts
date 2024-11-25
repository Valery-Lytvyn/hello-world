// Represents a country object with relevant properties
export interface Country {
  name: { common: string };
  capital: [string];
  area: number;
  flags: {
    png: string;
    svg: string;
  };
}

// Props for the CountryList component, which contains an array of countries
export interface CountryListProps {
  countries: Country[];
}

// Props for the CountryTile component, which represents a single country
export interface CountryTileProps {
  country: Country;
}

// Props for the CountrySearchInput component, which handles input for searching countries
export interface CountrySearchInputProps {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Props for the Pagination component, which handles pagination logic
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
