import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../atoms/Button"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <div className="relative  flex justify-center ">
            <div className=" bg-white w-90 h-15 rounded-4xl flex items-center justify-between my-6 px-4">
                <h1>LUMI</h1>
                <Button onClick={() => setIsOpen(!isOpen)} className={" border-4 border-black "}>

                </Button>

            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-20  "
                        onClick={() => setIsOpen(false)}
                    >
                    </div>
                    <div className="absolute z-30 right-0 w-50 h-screen flex flex-col flex-end items-center  bg-white">
                        <Link to='about' onClick={() => setIsOpen(false)}>acerca</Link>
                    </div>
                </>
            )}

        </div>

    )
}