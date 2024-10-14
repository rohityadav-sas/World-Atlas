import CountryCard from "../../components/CountryCard"
import countries from '../../api/countryData.json'

export default function About() {
    return (
        <div className="flex flex-col relative p-clamp-sm lg:p-clamp-lg pt-clamp gap-6">
            <div className="relative">
                <h1 className="font-bold text-3xl text-center leading-10">Here are the Interesting Facts <br /> we are proud of!</h1>
            </div>
            <div className="p-4 flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countries.map(country => (
                    <CountryCard key={country.id} country={country} />
                ))}
            </div>
        </div>

    )
}