import { useState } from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (<>

     <div className="relative w-full">
        <div className=" bg-white w-90 h-15 rounded-4xl flex items-center justify-between px-4">
            <h1>Hola</h1>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="border-4 border-black ">
            </button>
        </div>
            {isOpen && (
                <div className="absolute bg-white w-90 h-auto flex flex-col items-center rounded-2xl mt-2 ">
                    <Link to='about'>acerca</Link>
                </div>
            )}
        </div>
    </>)
}