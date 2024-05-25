import { Modal } from "flowbite-react";
import { useState } from "react";

const UserAddButton = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
    <button className='bg-red-500  font-FiraSans size-fit ml-[100%] m-9 text-[#b1b1b1] text-center p-2 px-7' onClick={()=> setModalIsOpen(true)}>
            <Modal show={modalIsOpen} onClose={closeModal} dismissible>
                <Modal.Header>
                    <p className='text-[#b1b1b1] font-FiraSans'>Adicionar Usuário </p>
                </Modal.Header>
            </Modal>
        NOVO
    </button>
    )
}
export default UserAddButton;