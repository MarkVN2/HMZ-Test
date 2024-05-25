import '@/app/globals.css'
import Sidebar from '@/components/sidebar';
import TopBar from "@/components/topbar";
import UserAddButton from '@/components/user_add_button';
import UsersTableRow from '@/components/users_table_row';
import instance from '@/scripts/requests/instance';
import { Table } from 'flowbite-react';
import { useState } from 'react';

export default function Usuarios() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    
    type User = {
        id: number;
        avatar: string;
        email: string;
        first_name: string;
        last_name: string;
      };

    const dataTest : User[] =[
    {
      "id": 1,
      "avatar": "avatar1",
      "email": "email1@example.com",
      "first_name": "FirstName1",
      "last_name": "LastName1"
    },
    {
      "id": 2,
      "avatar": "avatar2",
      "email": "email2@example.com",
      "first_name": "FirstName2",
      "last_name": "LastName2"
    },
    {
      "id": 3,
      "avatar": "avatar3",
      "email": "email3@example.com",
      "first_name": "FirstName3",
      "last_name": "LastName3"
    },
    ]

    const getData = async () => {
      const response = await instance.get(`/users?page=${page}`);
      setData(response.data);
    };

    const handlePrevious = () => {
    if (page > 1) {
        setPage(page - 1);
        getData()
    }
    };

    const handleNext = () => {
      setPage(page + 1);
      getData()
    };
    return(
    <div className='h-screen bg-[#b1b1b1]'>
        <TopBar />
        <div className='grid grid-flow-co'>
          <Sidebar />
          <div className='ml-96  h-[calc(100vh-3.25rem)] mt-[3.25rem] bg-white p-5 border-4 border-solid border-[#b1b1b1] grow flex grid-flow-col '>
               <div className='place-content-baseline'>
                <div className='grid grid-flow-col place'>
                    <p className='text-[#646464] font-FiraSans m-9'>USUÁRIOS</p>
                    <UserAddButton />
                </div>
                <div >
                <Table className="bg-[#f5f5f5] text-black ml-11">
                    <Table.Head className='bg-[#f5f5f5] text-center text-black font-FiraSans  border-b'>
                        <Table.HeadCell ></Table.HeadCell>
                        <Table.HeadCell>ID</Table.HeadCell>
                        <Table.HeadCell>Avatar</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Nome</Table.HeadCell>
                        <Table.HeadCell>Sobrenome</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='px-6 py-4'>
                        {dataTest.map((user, index) => (
                                <UsersTableRow  
                                    key={index}
                                    id={user.id}
                                    avatar={user.avatar}
                                    email={user.email}
                                    first_name={user.first_name}  
                                    last_name={user.last_name}
                                />
                            ))}
                    </Table.Body>
                </Table>
                </div>
                <div className="flex justify-center space-x-2">
                    <button onClick={handlePrevious} className="btn btn-primary">Previous</button>
                    <button onClick={() => setPage(1)} className="btn btn-outline">1</button>
                    <button onClick={() => setPage(2)} className="btn btn-outline">2</button>
                    <button onClick={() => setPage(3)} className="btn btn-outline">3</button>
                    <button onClick={handleNext} className="btn btn-primary">Next</button>
                </div>
              </div> 
          </div>
        </div>
    </div>
    )
}