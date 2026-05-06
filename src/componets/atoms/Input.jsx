export default function Input({
    value,
    onChange,
    placeholder = ""
}) {
    return (<>
        <input
            className="border-2 border-black h-12 w-60"
            value={value}
            onChange={onChange} 
            placeholder={placeholder} />
    </>)
}