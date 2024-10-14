import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


export default function GoBackButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)}
            className="px-3 py-2 pr-3.5 h-fit w-fit rounded-md transition-all absolute left-1 top-2 md:left-5 md:top-5">
            <MdOutlineKeyboardBackspace className="text-purple-200 text-2xl hover:scale-125 transition-all hover:text-purple-400" />
        </button>
    )
}