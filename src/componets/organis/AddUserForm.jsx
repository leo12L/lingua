import { useState } from "react"
import Input from "../atoms/Input"
import Button from "../atoms/Button"


export default function AddUserForm({ onAdd }) {
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const datos = { name, last_name, email, password }

    const handleSubmit = (e) => {
        e.preventDefault();
        const todosLlenos = Object.values(datos).every(valor => valor.trim() !== '');
        if (!todosLlenos) return;
        onAdd(datos)
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className="w-screen h-screen flex justify-center items-start overflow-hidden">
            <form onSubmit={handleSubmit} className=" bg-white rounded-2xl h-18/20 w-8/10 flex flex-col items-center pt-10 mt-10">
                <h1 className="flex justify-center text-3xl">Crear cuenta</h1>
                <label htmlFor="" className="text-sm">Aqui comienza tu camino de aprendizaje</label>
                <div className="flex flex-col justify-around h-80 my-4 ">
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                    />
                    <Input
                        value={last_name}
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
                <label htmlFor="">_______________ o ________________</label>
                <label htmlFor="" className="text-sm m-2">Registrate con</label>
                
                <Button type="submit"> Google </Button>
            </form>
        </div>
    )
}