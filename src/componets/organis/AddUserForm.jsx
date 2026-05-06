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
        <div className="border-2 border-amber-400 w-screen h-screen flex justify-center items-start  overflow-hidden ">
            <form onSubmit={handleSubmit} className="h-5/5 flex flex-col mt-20">
                <h1 className="flex justify-center">Crear cuenta</h1>
                <div className="flex flex-col justify-around h-80 my-8 ">
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                    />
                    <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Apellido"
                    />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                    />

                </div>
                    <Button type="submit"> Crear </Button>
            </form>
        </div>
    )
}