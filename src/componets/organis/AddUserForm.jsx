import { useState } from "react"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

export default function AddUserForm({ onAdd }) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const datos = [name, lastName, email, password]

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].trim() === '') return;
        }
        onAdd(datos)
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
    return (
        <div className="border-2 border-amber-400 w-screen h-screen flex justify-center items-center overflow-hidden">
        <form onSubmit={handleSubmit} className="h-2/5 flex flex-col justify-around">
            <h1 className="flex justify-center">Nueva cuenta</h1>
            <Input
                value={name}
                onChange={(e)=>  setName(e.target.value)}
                placeholder="Nombre"
            />
            <Input
                value={lastName}
                onChange={(e)=>  setLastName(e.target.value)}
                placeholder="Apellido"
            />
            <Input
                value={email}
                onChange={(e)=>  setEmail(e.target.value)}
                placeholder="Email"
            />
            <Input
                value={password}
                onChange={(e)=>  setPassword(e.target.value)}
                placeholder="Contraseña"
            />
            
            <Button type="submit"> Crear cuenta </Button>
        </form>
        </div>
    )
}