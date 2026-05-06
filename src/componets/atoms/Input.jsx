export default function Input({
    value,
    onChange,
    placeholder = ""
}) {
    return (<>
        <input
            className="border-2 border-black h-10 w-60"
            value={value}
            onChange={onChange} 
            placeholder={placeholder} />
    </>)
}