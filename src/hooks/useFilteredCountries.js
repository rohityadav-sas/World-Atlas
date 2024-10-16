import { useState, useEffect, useCallback, useMemo } from "react";
import { debounceSearch } from "../utils/debounceSearch";
import countriesData from '../api/countryData.json';

export function useFilteredCountries(search, filterContinent) {
    const [filteredCountries, setFilteredCountries] = useState(countriesData);

    const filterCountries = useMemo(() => {
        let updatedCountries = countriesData;

        if (filterContinent !== 'All') {
            updatedCountries = updatedCountries.filter(country => country.continent === filterContinent);
        }

        return updatedCountries;
    }, [filterContinent]);

    const handleSearch = useCallback(debounceSearch((value) => {
        let updatedCountries = filterCountries;

        if (value) {
            updatedCountries = updatedCountries.filter(country =>
                country.countryName.toLowerCase().includes(value.toLowerCase())
            );
        }

        setFilteredCountries(updatedCountries);
    }), [filterContinent]);

    useEffect(() => {
        handleSearch(search);
        return () => {
            handleSearch.cancel();
        };
    }, [search, handleSearch]);

    return filteredCountries;
}
