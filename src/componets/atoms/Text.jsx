import { Link } from "react-router-dom";

export default function Text() {
    return (
        <div className="h-100 w-95 flex flex-col gap-2 px-6 py-4">

            <p className="text-white/60 text-5xl tracking-widest uppercase">
                Bienvenido
            </p>

            <h1 className="mt-5 ml-4 text-white text-4xl font-bold leading-tight">
                Aprende a <br />
                <span className="ml-15 text-amber-400 text-6xl">Tu estilo</span>
            </h1>

            <p className="mt-10 text-white/70 text-lg text-center ">
                Aprende idiomas de forma unica <br />
                Creado solo para ti
            </p>

            <Link to="/login" className="h-10 w-30 flex justify-center items-center text-center ml-25 mt-10 rounded-3xl bg-amber-400">Registrarse</Link>

        </div>
    )
}