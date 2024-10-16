import React, { useState, useCallback } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CountryCard from "../../components/CountryCard";
import Search from "../../components/Search";
import { useFilteredCountries } from "../../hooks/useFilteredCountries";
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [search, setSearch] = useState('');
    const [filterContinent, setFilterContinent] = useState('All');
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    const filteredCountries = useFilteredCountries(search, filterContinent);

    const visibleCountries = filteredCountries.slice(0, page * itemsPerPage);

    const { ref: loadMoreRef, inView } = useInView({ threshold: 1 });

    const loadMoreCountries = useCallback(() => {
        if (inView && visibleCountries.length < filteredCountries.length) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [inView, visibleCountries.length]);

    React.useEffect(() => {
        loadMoreCountries();
    }, [inView]);

    return (
        <div className="flex w-full flex-col relative sm:p-clamp-sm pt-clamp gap-6">
            <Search
                value={search}
                onChange={setSearch}
                filterContinent={filterContinent}
                onFilterChange={setFilterContinent}
            />
            <div className="px-10 py-3 flex-grow overflow-y-auto">
                <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {visibleCountries.map(country => (
                        <CSSTransition key={country.id} timeout={300} classNames="fade">
                            <CountryCard country={country} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                <div ref={loadMoreRef} style={{ height: '20px' }} />
            </div>
        </div>
    );
}
