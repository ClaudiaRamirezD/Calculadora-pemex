function InputField({ label, placeholder, value, onChange }) {
    return (
        <label className="block">
        {label}
        <input
            type="number"
            className="w-full bg-gray-700 text-white rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
        </label>
    );
}

export default InputField;
