export default function Input({ label, id, register, validation, errors, ...rest }) {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label htmlFor={id} className="text-md font-bold">{label}</label>
                <input
                    id={id}
                    {...register(id, validation)}
                    className="bg-gray-700 py-3 px-4 rounded-lg text-white focus:border-blue-500 focus:ring-indigo-500 focus:ring-2 outline-none"
                    {...rest}
                />
            </div>
            {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
        </>
    )
}