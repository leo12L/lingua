import Background from "../atoms/Background"

import Fondo from "../../assets/inicioPageLenguage.png"
import NavBar from "../moleculs/NavBar"
import Button from "../atoms/Button"
import { Link } from "react-router-dom"



export default function Banner() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <Background src={Fondo} className={" absolute inset-0 w-full h-full object-cover"} />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
            <NavBar />

            <div className="relative z-10 right-0 border-amber-400 w-full h-full overflow-hidden border-4 ">
                <div className="text-white border-4 border-y-zinc-50 mt-15">
                    <h1 className="text-4xl pl-10 p">Aprende</h1>

                    <label htmlFor="" className="text-5xl pl-18"> a tu manera</label>
                </div>
                <br />
                <div className="border-cyan-200 border-4 text-center">
                    <label htmlFor="" className="text-white border-2 border-amber-600">
                        Se tu, el que decida la mejor forma de aprender
                    </label>
                    <br />
                    <br />
                    <Link to='createAccount'>Hola</Link>
                </div>

            </div>

        </div>




    )
}