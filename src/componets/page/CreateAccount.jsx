import axios from "axios";
import AddUserForm from "../organis/AddUserForm";
import { useNavigate } from 'react-router-dom';



export default function CreateAccount() {
    const navigate = useNavigate();

    const register = async (datos) => {
        console.log(datos)
        const { name, last_name, email, password } = datos
        try {
            const response = await axios.post("http://localhost:3015/users",
                {
                    name,
                    last_name,
                    email,
                    password
                }
            )
            console.log('Usuario creado:', response.data);
            localStorage.setItem('token', response.data.token)
            navigate('/profile')
        } catch (error) {
            console.error('Error al registrar:', error);
        }

    }

    return (<>
        <div className="diagonal-bg">
            
                <AddUserForm onAdd={register} />
          
            
        </div>


    </>)
}