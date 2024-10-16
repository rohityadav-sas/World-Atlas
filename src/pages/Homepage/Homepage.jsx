import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";


export default function Homepage() {
    return (
        <div className="p-clamp-sm w-full lg:p-clamp-lg flex flex-col md:flex-row justify-evenly items-center">
            <div className="flex leading-6 flex-col gap-4 pt-clamp">
                <h1 className="font-mono font-bold text-2xl">Explore the World, One Country at a Time</h1>
                <p> Discover the history, culture, and beauty of every nation. <br />
                    Sort, search and filter through countries to find the details you need.</p>
                <Link to="/about"> <button className="flex w-fit justify-center items-center bg-purple-800 hover:bg-purple-900 transition-all rounded-lg p-3"><FcSearch className="text-2xl mr-2" />Start Exploring  </button></Link>
            </div>
            <div className="pt-clamp">
                <img src="./monuments.png" alt="Image" className="img-clamp aspect-square" />
            </div>
        </div>
    )
}