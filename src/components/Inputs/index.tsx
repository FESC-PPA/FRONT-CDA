export const InputText = ({ title, value, onChange }) => {
    return (
        <>
            <label htmlFor={title} className="block text-gray-700 text-sm font-bold mb-2">
                {title}
            </label>
            <input
                type="text"
                id={title}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
        </>
    )
}

export const InputPassword = ({ title, value, onChange }) => {
    return (
        <>
            <label htmlFor={title} className="block text-gray-700 text-sm font-bold mb-2">
                {title}
            </label>
            <input
                type="password"
                id={title}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
        </>
    )
}