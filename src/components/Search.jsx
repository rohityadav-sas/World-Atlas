export default function Search({ value, onChange, filterContinent, onFilterChange }) {
    return (
        <div className="flex flex-col items-center md:flex-row justify-center gap-4 py-4 text-black">
            {/* Continent Filter Dropdown */}
            <select
                name="continent"
                id="continent"
                value={filterContinent}
                onChange={(e) => onFilterChange(e.target.value)}
                className="p-3 w-48 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition duration-200 ease-in-out"
            >
                <option value="All">All Continents</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
            </select>

            {/* Search Input */}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="p-3 w-64 rounded-lg bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-blue-400 placeholder-gray-500 transition-all duration-200 ease-in-out  focus:border-blue-500 hover:bg-gray-200"
                placeholder="Search for a country"
            />
        </div>
    );
}
