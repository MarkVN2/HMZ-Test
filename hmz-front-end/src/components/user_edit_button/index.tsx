import { Label, Modal, TextInput } from "flowbite-react";
import { Table } from "flowbite-react";
import EditIcon from "../svg_icons/edit_icon";
import { useEffect, useState } from "react";
import instance from "@/scripts/requests/instance";
import { successAlert, warningAlert } from "@/scripts/utils/shared";

const UserEditButton = ({id}:{id:number}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [user, setUser] = useState<{avatar: string, email: string, firstName:string, lastName:string}>({
        avatar: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    const getData = async () => {
        const response = await instance.get(`/users/${id}`);
        console.log(response)
        setUser(response.data);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    const handleDelete = () => {
     instance.delete(`/users/${id}`).then((response) => {
         console.log(response.status)
         successAlert('Usuário excluído com sucesso!')
         closeModal()
     }).catch((error) => {
         console.log(error)
     });
    }
    const handleEdit = (e:React.FormEvent) =>{
        e.preventDefault()
        instance.put(`/users/${id}`,{
            avatar: user.avatar,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }).then((response) => {
            console.log(response.status)
            successAlert('Usuário editado com sucesso!')
            closeModal()
        }).catch((error) => {
            console.log(error)
        });
    }
    const handleChange = (e :any) =>{
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    useEffect(() => {
        getData()
    },[]);
    return(
        <Table.Cell className="cursor-pointer" onClick={()=>setModalIsOpen(true)}>
            <EditIcon/>
            <Modal show={modalIsOpen} onClose={closeModal}  className="bg-black bg-opacity-30  w-50 " dismissible>
                <p className='text-[#8b8b8b] font-FiraSans mt-5 ml-5'>EDITAR USÚARIO {id}</p>
                <Modal.Body>
                    <div className='grid grid-flow-col'>
                        <form className='grid grid-flow-row  m-2 p-2'>
                            <div className="grid grid-flow-col">
                                <div>
                                    <div className="mx-10 my-10">
                                    <Label htmlFor="first_name" value="NOME" className="font-FiraSans text-[#b1b1b1]" />
                                        <div className="border-2 rounded-sm ">
                                            <TextInput id="first_name" type="text" name="firstName" value={user.firstName} onChange={handleChange} required/>
                                        </div> 
                                    </div>
                                    <div className="mx-10 my-10">
                                    <Label htmlFor="last_name" value="SOBRENOME" className="font-FiraSans text-[#b1b1b1]" />    
                                        <div className="border-2 rounded-sm ">
                                            <TextInput id="last_name" type="text" name="lastName" value={user.lastName}  onChange={handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mx-10 my-10">
                                        <Label htmlFor="avatar" value="AVATAR" className="font-FiraSans text-[#b1b1b1]" />
                                        <div className="border-2 rounded-sm ">
                                            <TextInput id="avatar" type="text" name="avatar" value={user.avatar} onChange={handleChange} required/>
                                        </div>
                                    </div>    
                                    <div className="mx-10 my-10">
                                        <Label htmlFor="email" value="EMAIL" className="font-FiraSans text-[#b1b1b1]" />
                                            <div className="border-2 rounded-sm ">    
                                                <TextInput id="email" type="text" name="email" value={user.email} onChange={handleChange} required/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-flow-col place-content-evenly">
                            <div className="mb-2">
                                <button  className='  bg-[#f4f4f4] text-[#b1b1b1] p-3 px-12 hover:scale-110 hover:bg-red-500 hover:text-black transition-all font-FiraSans' 
                                onClick={(e:React.FormEvent) => {e.preventDefault(); warningAlert('popup-delete','Tem certeza que deseja excluir este usuário?',handleDelete)}}>
                                    EXCLUIR 
                                </button>
                            </div>
                            <div className=" mb-2">
                                <button className='  bg-[#f4f4f4] text-[#b1b1b1] p-3 px-12 hover:scale-110 hover:bg-green-400 hover:text-black transition-all font-FiraSans' 
                                onClick={handleEdit}>
                                    SALVAR
                                </button>   
                            </div>
                        </div>
                        </form>
                    </div>
                   
                </Modal.Body>
            </Modal>
        </Table.Cell>
)
}
export default UserEditButton;