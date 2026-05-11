export default function Select({
    option = [],
    placeholder,
    onChange,
    
}) {
    
    return (<>
        <select name="" id=""  onChange={onChange}>

             <option value="">{placeholder}</option>
             
           {option.map((item)=>(
            <option key={item.value} value={item.value} >
                {item.placeholder}
            </option>
           )
        )}
        </select>
    </>)
}