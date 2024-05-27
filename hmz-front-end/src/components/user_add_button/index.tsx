import instance from "@/scripts/requests/instance";
import { failureAlert, successAlert } from "@/scripts/utils/shared";
import { Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

interface UserAddButtonProps {
    className? : string;
    title?:string
    buttonTitle?:string
}

const UserAddButton = ({className = 'bg-[#f5f5f5] font-FiraSans size-fit ml-[65%] m-9 text-[#b1b1b1]  transition-all hover:scale-110 hover:bg-cyan-300 hover:text-black text-center p-2 px-7 ',title = 'ADICIONAR USÚARIO',buttonTitle = 'NOVO'} : UserAddButtonProps) => {

    const [user, setUser] = useState<{first_name: string, last_name: string, avatar: string, email: string, password:string}>({
        first_name: '',
        last_name: '',
        avatar: '',
        email: '',
        password:'',
    })
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        await instance.post('/register',{
        firstName: user.first_name,
        lastName: user.last_name,
        avatar: user.avatar,
        email: user.email,
        password: user.password
        }).then((response) => {
            console.log(response)
            console.log(response.status)
            if (response.status === 201){
            successAlert('Usuário adicionado com sucesso!')
            closeModal()
            
            if (window.location.pathname === '/usuarios'){
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            };
            }
        }).catch((error) => {
            failureAlert('Erro ao adicionar usuário!')
            console.log(error)      
        })
    }
    const handleChange = (e :any) =>{
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    return (
    <button className={ className} onClick={()=> setModalIsOpen(true)}>
            <Modal show={modalIsOpen} onClose={closeModal}  className="w-50 bg-black bg-opacity-30 " dismissible>
                <p className='text-[#8b8b8b] font-FiraSans mt-5 ml-5'>{title} </p>
                <Modal.Body>
                        <form className='grid grid-flow-row  m-2 p-2' onSubmit={handleSubmit}>
                            <div className="grid grid-flow-col">
                                <div className="">
                                    <div className="mx-10 my-10">
                                    <Label htmlFor="first_name" value="NOME" className="font-FiraSans text-[#b1b1b1]" />
                                        <div className="border-2 rounded-sm ">
                                            <TextInput id="first_name" type="text" name="first_name" onChange={handleChange}  required/>
                                        </div> 
                                    </div>
                                    <div className="mx-10 my-10">
                                    <Label htmlFor="last_name" value="SOBRENOME" className="font-FiraSans text-[#b1b1b1]" />    
                                        <div className="border-2 rounded-sm ">
                                            <TextInput id="last_name" type="text" name="last_name" onChange={handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="mx-10 my-10">
                                        <Label htmlFor="password" value="SENHA" className="font-FiraSans text-[#b1b1b1]" />
                                            <div className="border-2 rounded-sm ">    
                                                <TextInput id="password" type="text" name="password" onChange={handleChange}  required/>
                                            </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mx-10 my-10">
                                        <Label htmlFor="avatar" value="AVATAR" className="font-FiraSans text-[#b1b1b1]" />
                                        <div className="border-2 rounded-sm ">
                                            <TextInput id="avatar" type="text" name="avatar" onChange={handleChange}  required/>
                                        </div>
                                    </div>    
                                    <div className="mx-10 my-10">
                                        <Label htmlFor="email" value="EMAIL" className="font-FiraSans text-[#b1b1b1]" />
                                            <div className="border-2 rounded-sm ">    
                                                <TextInput id="email" type="email" name="email" onChange={handleChange}  required/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-flow-col place-content-center">
                            <div className="">
                                <button type="submit" className='  bg-[#f4f4f4] text-[#b1b1b1] hover:bg-green-400 hover:text-black p-3 px-12 hover:scale-110 transition-all font-FiraSans' 
                               >
                                    SALVAR
                                </button>
                            </div>
                        </div>
                        </form>
                 
                </Modal.Body>
                </Modal>
                {buttonTitle}
    </button>
    )
}
export default UserAddButton;