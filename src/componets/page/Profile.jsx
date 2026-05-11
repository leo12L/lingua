import axios from "axios";
import { useState } from "react";
import Select from "../moleculs/Select";
import Button from "../atoms/Button";

export default function Profile() {
    const token = localStorage.getItem('token');
    const [languages_learning, setLanguages_learning] = useState('')
    const [languages_native, setLanguages_native] = useState('')

    const item = [
        { value: "ESP", placeholder: "Español" },
        { value: "EN", placeholder: "Ingles" }
    ]

    const register = async () => {
        try {
            const response = await axios.post("http://localhost:3015/profile",
                {
                    languages_native,
                    languages_learning
                },

                {headers:{authorization: `Bearer ${token}`}}
            )
            console.log('idioma', response.data)
        }
        catch (error) {
            console.error('Error al guardar idiomas', error)
        }
    }


    return (
        <>
            <div className="h-screen flex flex-col items-center justify-around border-4 border-blue-800">

                <div className="border-4 border-amber-200 mt-20">
                    <h1>Elige tu idioma a aprender</h1>
                </div>
                <div className="border-2 border-amber-500 h-3/5 w-2/4 flex flex-col items-center justify-around mb-10">
                    <div className="flex flex-col">
                        <h2 className="text-center">Idioma en que quieres aprender</h2>
                        <br />
                        <Select   placeholder={"Elige un idioma"} option={item} onChange={(e) => setLanguages_native(e.target.value)} />
                    
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-center">Idioma que quieres aprender</h2>
                        <br />
                        <Select  placeholder={"Elige un idioma"}  option={item} onChange={(e) => setLanguages_learning(e.target.value)} />
                    </div>
                    <Button  className={"border-2 border-amber-100"} type="submit" onClick={register}> Continuar </Button>
                </div>
                
            </div>

        </>
    )
}