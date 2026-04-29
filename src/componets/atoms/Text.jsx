export default function Text() {
    return (
        <div className="flex flex-col gap-2 px-6 py-4">

            <p className="text-white/60 text-xs tracking-widest uppercase">
                Bienvenido
            </p>

            <h1 className="text-white text-3xl font-bold leading-tight">
                Aprende a <br />
                <span className="text-amber-400">tu estilo</span>
            </h1>

            <p className="text-white/70 text-sm leading-relaxed">
                Aprende idiomas de forma unica <br />
                Creado solo para ti
            </p>

            <button className="mt-3 bg-amber-400 text-black text-sm font-bold px-5 py-2 rounded-full w-fit">
                Comenzar →
            </button>

        </div>
    )
}