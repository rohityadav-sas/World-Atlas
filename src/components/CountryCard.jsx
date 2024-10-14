import { LiaLandmarkSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import { useState, useRef, useEffect } from "react";
import { LuImageOff } from "react-icons/lu";
import ReadMoreButton from "./ReadMoreButton";

export default function CountryCard({ country }) {
    let [flagLoaded, setFlagLoaded] = useState(false);
    let [flagError, setFlagError] = useState(false);
    let [compactMode, setCompactMode] = useState(true);
    const [cardHeight, setCardHeight] = useState("auto");
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            setCardHeight(compactMode ? "14rem" : `${cardRef.current.scrollHeight}px`);
        }
    }, [compactMode]);

    const handleCompactMode = () => {
        setCompactMode((prevMode) => !prevMode);
    }

    if (!country) {
        return (
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-5 flex items-center justify-center h-64">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-700 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-700 rounded"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const containCountries = ['Nepal'];
    return (
        <div onClick={handleCompactMode} style={{ height: cardHeight }} className={`*:bg-gray-800 rounded-xl overflow-hidden cursor-pointer duration-300 shadow-sm hover:scale-105`} ref={cardRef}>
            <div className="relative h-52 overflow-hidden transition-all ease-in-out" style={compactMode ? { borderRadius: "0.75rem" } : {}}>
                {!flagLoaded && !flagError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                        <div className="animate-pulse rounded-full h-16 w-16 bg-gray-600"></div>
                    </div>
                )}
                {flagError ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                        <LuImageOff className="h-16 w-16 text-gray-600" />
                    </div>
                ) : (
                    <img
                        src={country.flag}
                        alt={`Flag of ${country.countryName}`}
                        className={`h-full w-full object-cover transition-opacity duration-300 ${flagLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        style={containCountries.includes(country.countryName) ? { objectFit: "contain" } : {}}
                        onLoad={() => setFlagLoaded(true)}
                        onError={() => setFlagError(true)}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold font-mono text-white">{country.countryName}</h2>
            </div>
            <div className={`p-5 flex flex-col gap-3 origin-top justify-end ${compactMode ? "scale-y-0" : "scale-y-100"} transition-all`}>
                <div className="flex items-center text-gray-300">
                    <LiaLandmarkSolid className="w-5 h-5 mr-2" />
                    <span className="text-sm tracking-wider text-white italic"><span className="text-gray-300 not-italic font-bold">Capital:</span> {country.capital}</span>
                </div>
                <div className="flex items-center text-gray-300">
                    <FiUsers className="w-5 h-5 mr-2" />
                    <span className="text-sm tracking-wider text-white italic"><span className="text-gray-300 not-italic font-bold">Population:</span> {new Intl.NumberFormat().format(country.population)}</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                    <div className="flex items-start text-gray-300">
                        <LuSparkles className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-sm h-16">
                            <span className="font-semibold text-indigo-400">Interesting Fact:</span> {country.interestingFact}
                        </p>
                    </div>
                </div>
                <ReadMoreButton to={`/about/${country.countryName}`} />
            </div>
        </div>
    )
}