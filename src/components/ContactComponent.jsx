export default function ContactComponent({ label, info, Icon }) {
    return (
        <div className="flex text-xs sm:text-sm justify-center gap-2 sm:gap-4 items-center">
            <Icon className="text-lg sm:text-2xl text-purple-700" />
            <div >
                <p className="font-bold text-gray-300">{label}</p>
                <p className="text-gray-500">{info}</p>
            </div>
        </div>
    )
}
