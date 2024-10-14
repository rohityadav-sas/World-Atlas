import { useParams } from 'react-router-dom';
import countries from '../../api/countryData.json';
import Info from '../../components/Info';
import GoBackButton from '../../components/GoBackButton';

export default function ReadMore() {
    const { countryName } = useParams();
    const country = countries.find(country => country.countryName === countryName);
    return (
        <div className='flex rounded-xl w-full bg-gradient-to-r from-surface-10 via-gray-500 to-surface-10 p-[1px]'>
            <div className='flex relative w-full justify-evenly md:justify-evenly flex-col items-center md:items-stretch md:flex-row sm:p-clamp-sm lg:p-clamp-lg bg-custom-gradient rounded-xl'>
                <GoBackButton />
                <div className='flex items-center w-64 md:w-96 border-xl overflow-hidden justify-center md:h-full mt-5 md:mt-0'>
                    <div>
                        <img src={country.flag} className='rounded-xl' style={country.countryName === "Nepal" ? { height: "12rem" } : {}} />
                    </div>
                </div>
                <div className='flex gap-4 md:justify-evenly flex-col'>
                    <h1 className='font-mono font-bold text-3xl text-purple-300'>{country.countryName}</h1>
                    <Info label="Native Names" value={country.nativeNames} />
                    <Info label="Capital" value={country.capital} />
                    <Info label="Population" value={country.population} />
                    <Info label="Currency" value={country.currencies} />
                    <Info label="Continent" value={country.continent} />
                    <Info label="Languages" value={country.languages} />
                    <Info label="Time Zone" value={country.timezone} />
                </div>
            </div>
        </div>
    );
}