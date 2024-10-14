import ContactComponent from "../../components/ContactComponent"
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { LuMailPlus } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-surface-0 flex justify-between text-white px-2 py-4 sm:p-6 sm:px-20 w-full sm:p-clamp-sm lg:p-clamp-lg">
            <Link to="https://www.google.com/maps?q=lalitpur" target="_blank">
                <ContactComponent label="Find us" info="Lalitpur, Kathmandu" Icon={IoLocationOutline} />
            </Link>
            <Link to="tel:9829493372" target="_blank">
                <ContactComponent label="Call us" info="98XXXXXX" Icon={IoCall} />
            </Link>
            <Link to="mailto:rohityadav.se@gmail.com" target="_blank">
                <ContactComponent label="Mail us" info="author@gmail.com" Icon={LuMailPlus} />
            </Link>
        </footer>
    )
}
