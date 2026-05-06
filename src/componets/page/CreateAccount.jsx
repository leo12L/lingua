import AddUserForm from "../organis/AddUserForm";

export default function CreateAccount() {

    const register = async (datos) => {
        console.log()
        const [name, lastName, email, password] = datos
        try {
            console.log('Usuario creado:', { name, lastName, email, password });
        } catch (error) {
            console.error('Error al registrar:', error);
        }    
        console.log('Usuario actual:', {name, lastName, email, password});
    }


    return (<>
        <AddUserForm onAdd={register} />
    </>)
}