export default function Button({
    children, 
    onClick, 
    type="button", 
    variant=""
}){
    return  (
    <button  type={type} onClick={onClick} className={`${variant}`} >
        {children}
    </button>
    );
    
}