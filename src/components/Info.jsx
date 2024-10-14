export default function Info({ label, value }) {
    return (
        <p> <span className="text-gray-400 font-bold">{label}: </span> {value} </p>
    )
}