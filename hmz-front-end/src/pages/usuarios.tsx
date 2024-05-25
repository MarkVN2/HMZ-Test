import '@/app/globals.css'
import Sidebar from '@/components/sidebar';
import TopBar from "@/components/topbar";
import UsersTableRow from '@/components/users_table_row';
import { Table } from 'flowbite-react';
import { useState } from 'react';

export default function Usuarios() {
    const [page, setPage] = useState(1);
    type User = {
        id: number;
        avatar: string;
        email: string;
        first_name: string;
        last_name: string;
      };
    const data : User[] =[
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
    // This is a test data will be replaced with a request to the back-end using axios
    const handlePrevious = () => {
    if (page > 1) {
        setPage(page - 1);
    }
    };

    const handleNext = () => {
    setPage(page + 1);
    };
    return(
    <div className='flex md:flex-row grow flex-col h-screen bg-[#b1b1b1]'>
        <TopBar />
        <Sidebar />
        <div>
            <Table className="w-100  bg-[#f5f5f5] text-black">
                <Table.Head className=' bg-[#f5f5f5] text-center text-black font-FiraSans  border-b'>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Avatar</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Nome</Table.HeadCell>
                    <Table.HeadCell>Sobrenome</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {data.map((user, index) => (
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
            <div className="flex justify-center space-x-2">
                <button onClick={handlePrevious} className="btn btn-primary">Previous</button>
                <button onClick={() => setPage(1)} className="btn btn-outline">1</button>
                <button onClick={() => setPage(2)} className="btn btn-outline">2</button>
                <button onClick={() => setPage(3)} className="btn btn-outline">3</button>
                <button onClick={handleNext} className="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
    )
}