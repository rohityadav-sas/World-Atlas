import { useRouteError, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div className="flex flex-col flex-grow items-center justify-center bg-tertiary text-quinary">
            <div className="text-center">
                <h1 className="text-6xl font-bold  mb-4">404</h1>
                <p className="text-2xl font-semibold mb-6">Oops! Page not found.</p>
                <p className="mb-8">
                    {error.message} <br />
                    {error.status}
                </p>
                <button onClick={() => navigate(-1)}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-700  hover:bg-blue-800 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                        </path>
                    </svg>
                    <span className="ml-1 font-bold text-lg">Back</span>
                </button>

            </div>
        </div >
    )
}