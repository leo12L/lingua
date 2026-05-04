export default function NewAccount(){
    return(<>
    <div className="min-h-screen flex justify-center items-center  diagonal-bg">
            <div className="border-4 bg-black h-130 w-80 rounded-2xl">
                <div className="flex flex-col items-center text-white py-5">
                    <h1 className="flex flex-col">
                        <samp className="text-2xl ml-2"> Iniciar</samp>
                        <samp className="text-3xl"> Sesion</samp>
                    </h1>
                    <br />
                    <div className="flex flex-col my-5">
                        
                        <Input text="" />
                        <br />

                        
                        <Input text="" />

                    </div>
                    <br />
                    
                    <Button children={"Entrar"}/>
                    
               
                </div>
            </div>



        </div>
    </>)
}