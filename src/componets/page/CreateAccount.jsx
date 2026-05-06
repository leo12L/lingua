import axios from "axios";
import AddUserForm from "../organis/AddUserForm";


export default function CreateAccount() {

    const register = async (datos) =>{
        console.log()
        const {name, lastName, email, password } = datos
        try {
            const response = await axios.post("http://localhost:3015/users", 
                {
                    name,
                    lastName,
                    email,
                    password
                }
            )
            console.log('Usuario creado:', response.data);
        } catch (error) {
            console.error('Error al registrar:', error);
        }    
        console.log('Usuario actual:', {name, lastName, email, password});
    }


    return (<>
        <AddUserForm onAdd={register} />
    </>)
}