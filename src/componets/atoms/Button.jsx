export default function Button({
    children, 
    onClick, 
    type="button", 
    variant="primary"
}){
     const styles = {
        primary: "bg-amber-400 hover:bg-rojo-vivo text-black font-bold px-6 py-3 rounded-xl transition-all duration-300",
        secondary: "bg-transparent border-2 border-rojo-oscuro text-rojo-oscuro hover:bg-rojo-oscuro hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300",
        danger: "bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300",
    }
    return  (
    <button type={type} onClick={onClick} className={styles[variant]} >
        {children}
    </button>
    );
    
}