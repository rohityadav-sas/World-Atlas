import CountryCard from "../../components/CountryCard";
import countriesData from '../../api/countryData.json';
import Search from "../../components/Search";
import { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function About() {
    const [search, setSearch] = useState('');
    const [filterContinent, setFilterContinent] = useState('All');
    const [filteredCountries, setFilteredCountries] = useState(countriesData);

    useEffect(() => {
        let updatedCountries = countriesData;

        // Filter by continent if not "All"
        if (filterContinent !== 'All') {
            updatedCountries = updatedCountries.filter(country => country.continent === filterContinent);
        }

        // Apply search filter
        if (search) {
            updatedCountries = updatedCountries.filter(country =>
                country.countryName.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCountries(updatedCountries);
    }, [search, filterContinent]);

    return (
        <div className="flex w-full flex-col relative p-clamp-sm lg:p-clamp-lg pt-clamp gap-6">
            <Search
                value={search}
                onChange={setSearch}
                filterContinent={filterContinent}
                onFilterChange={setFilterContinent}
            />
            <div className="p-4 flex-grow">
                <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCountries.map(country => (
                        <CSSTransition key={country.id} timeout={300} classNames="fade">
                            <CountryCard country={country} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
}
