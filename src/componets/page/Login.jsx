import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function Login() {
    return (<>
        
            <div className="min-h-screen min-w-screen  border-4 bg-black h-130 w-80">
                <div className="flex flex-col items-center text-white py-5">
                    <h1 className="flex flex-col text-2xl">
                        <samp className="font-cause ml-1"> Iniciar Sesion</samp>
                        
                    </h1>
                    <div className="flex flex-col my-5">
                        <Input text="Correo electronico" />
                        
                        <Input text="Contraseña" />
                    </div>
                    <br />
                    <Button variant="bg-amber-400 flex items-center text-black text-sm h-10 w-54 font-bold px-6 py-3"  children={"Iniciar sesion con Google"}/>

                    <br />

                    <Button variant="h-10 w-54 flex items-center justify-center bg-amber-400 text-black  font-bold px-6 py-3"  children={"Entrar"}/>
                    <div className="text-sm">
                    <label className="mt-2">No tienes una cuenta?</label>
                    <label>
                        <Link to="/newAccount" className="hover:text-blue-500">Crear cuenta</Link>
                    </label>
                    </div>
                    
                
                </div>
            </div>



    

    </>)
}