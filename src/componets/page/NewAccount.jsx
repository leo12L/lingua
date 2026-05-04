import Input from "../atoms/Input"
import Button from "../atoms/Button"
import axios from "axios";
import { useState } from "react"


export default function NewAccount() {
    const [name, setName] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const register = async () => {
        console.log('datos a enviar:', name);
        try {
            const response = {
                name,
                last_name,
                email,
                password
                
            }
            console.log('Usuario creado:', response.data);
        } catch (error) {
            console.error('Error al registrar:', error);
        }
        console.log('name actual:', name);
    }


    return (<>
        <div className="min-h-screen min-w-screen flex justify-center items-center border-4 bg-black h-130 w-80 ">
            <div className="flex flex-col items-center text-white py-5">
                <h1 className="flex flex-col">
                    <samp className="text-2xl ml-4"> Crear</samp>
                    <samp className="text-3xl"> Cuenta</samp>
                </h1>
                <br />
                

                
                <div className="flex flex-col my-5">
                    <Input value={name} onChange={(x) => {console.log('onChange disparado', x.target.value); setName(x.target.value) }} text="Nombre"/>
                    <Input value={last_name} onChange={(x) => { console.log('onChange disparado', x.target.value); setLast_name(x.target.value)} } text="Apellido" />
                    <Input value={email} onChange={(x) => setEmail(x.target.value)} text="Correo electronico" />
                    <Input value={password} onChange={(x) => setPassword(x.target.value)} text="Contraseña" />
                 <Button onClick={()=>{register}, console.log("boton presionado") }  variant="bg-amber-400 px-6 py-2 rounded-xl text-black font-bold" children={"Registrarse"} />
                
                </div>
                
               

            </div>
        </div>
    </>)
}