import { Link } from "react-router-dom";
import { MdReadMore } from "react-icons/md";


export default function ReadMoreButton({ to }) {
    return (
        <Link to={to} className="flex gap-1 w-fit text-sm items-center bg-purple-800 hover:bg-purple-900 py-2 px-3 rounded-lg">
            <span>Read More</span>
            <MdReadMore className="mt-0.5 text-xl" />
        </Link>
    )
}