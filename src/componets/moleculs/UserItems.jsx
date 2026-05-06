import Button from "../atoms/Button";

export default function UserItems( {name, onRemove} ){

    return(
    <li className="user-item" >
        <span> {name} </span>
        <Button variant="danger" onClick={()=> onRemove(name) }>
            Eliminar
        </Button>
    </li>
    )
}