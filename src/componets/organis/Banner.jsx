import NavBar from "../moleculs/NavBar"
import Text from "../atoms/Text"
import fondo from "../../assets/inicioPageLenguage.png"
import Button from "../atoms/Button"

export default function Banner() {
    return (
       
        <div className="relative h-screen overflow-hidden">

          
            <img
                src={fondo}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />

        
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

           
            <div className="relative z-10 flex flex-col left-2 pt-5">
                <NavBar />
                
            </div>
            <div className=" relative mt-10 px-6 right-7">
                    <Text />
                    <Button>
                        Comenzar →
                    </Button>
            </div>

        </div>
    )
}