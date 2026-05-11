import Background from "../atoms/Background"
import Fondo from "../../assets/inicioPageLenguage.png"
import NavBar from "../moleculs/NavBar"
import { Link } from "react-router-dom"
import { SlArrowDown } from "react-icons/sl";

export default function Banner() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <Background src={Fondo} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
            <NavBar />

            <div className="relative w-full h-full flex flex-col justify-start pt-15 px-10 border-2 border-l-amber-400">
                <div className="text-white mb-5">
                    <h1 className="text-6xl font-bold leading-tight">Aprende</h1>
                    <span className="text-4xl text-amber-400">a tu manera</span>
                </div>

                <p className="text-white/70 text-lg mb-10 max-w-sm">
                    Sé tú, el que decida la mejor forma de aprender
                </p>

                <Link
                    to="createAccount"
                    className="bg-amber-400 text-black font-bold px-8 py-3 rounded-full w-fit hover:bg-amber-300 transition-all"
                >
                    Comenzar →
                </Link>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-amber-400 animate-bounce">
                    <SlArrowDown size={20}/>
                    <SlArrowDown size={20}/>
                    <SlArrowDown size={20}/>
                </div>

            </div>
        </div>
    )
}