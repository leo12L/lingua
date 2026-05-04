export default function Input({
    hw = "",
    my = "my-2",
    mx = "",
    text = "",
    colortext = "",
    borders = "border-1 border-amber-400",
    value,
    onChange
    }){
    return (<>
        <input value={value} onChange={onChange} type="text" placeholder={`${text}`} className={`${colortext}  ${hw} ${my} ${mx} ${borders} px-4 h-12 rounded-xs`}/>
    </>)
}