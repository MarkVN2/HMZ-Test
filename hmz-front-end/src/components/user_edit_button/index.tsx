import { Modal } from "flowbite-react";
import { Table } from "flowbite-react";
import EditIcon from "../svg_icons/edit_icon";
import { useState } from "react";

const UserEditButton = ({id}:{id:number}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [user, setUser] = useState<{avatar: string, email: string, first_name:string, last_name:string}>({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    });

    const closeModal = () => {
        setModalIsOpen(false);
    }
    
    const handleSubmit = (e: React.FormEvent) =>{
    }

    return(
        <Table.Cell className="cursor-pointer" onClick={()=>setModalIsOpen(true)}>
            <EditIcon/>
            <Modal show={modalIsOpen} onClose={closeModal} dismissible>
                <Modal.Header>
                    <p className='text-[#b1b1b1] font-FiraSans'>Editar Usuário {id}</p>
                </Modal.Header>
            </Modal>
        </Table.Cell>
)
}
export default UserEditButton;