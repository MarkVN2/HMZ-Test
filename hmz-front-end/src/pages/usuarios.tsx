import '@/app/globals.css'
import Sidebar from '@/components/sidebar';
import TopBar from "@/components/topbar";
import UserAddButton from '@/components/user_add_button';
import UsersTableRow from '@/components/users_table_row';
import instance from '@/scripts/requests/instance';
import { Table } from 'flowbite-react';
import { use, useEffect, useState } from 'react';

export default function Usuarios() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [maxPages, setMaxPages] = useState(0);
    const [perPage, setPerPage] = useState(5)
    const [totalInfo, setTotalInfo] = useState(0)

    const getData = async () => {
      const response = await instance.get(`/users?page=${page}&per_page=${perPage}`);
      console.log(response)
      setTotalInfo(response.data.total)
      setMaxPages(response.data.totalPages)
      setData(response.data.data);
    };

    const handlePrevious = () => {
    if (page > 1) {
        setPage(page - 1);
        console.log(page)
    }
    };

    const handleNext = () => {
      if (page < maxPages)
      setPage(page + 1);
      console.log(page)
    };
    useEffect(() => {
    getData()
    },[page]);
    useEffect(() => {
      setPage(1)
      console.log(page)
      getData()
      },[perPage]);
      
    return(
    <div className='h-screen bg-[#b1b1b1]'>
        <TopBar />
        <div className='grid grid-flow-co'>
          <Sidebar />
          <div className='ml-96  max-md:ml-0 max-md:h-full min-h-[calc(100vh-3.25rem)]  mt-[3.25rem] bg-white p-5 border-4 border-solid border-[#b1b1b1] grow flex grid-flow-col '>
               <div className=' place-content-baseline'>
                <div className='grid grid-flow-col place'>
                    <p className='text-[#646464] font-FiraSans m-9'>USUÁRIOS</p>
                    <UserAddButton/>
                </div>
                <div >
                <Table className="bg-[#f5f5f5] text-black ml-11">
                    <Table.Head className='bg-[#f5f5f5] text-center text-black font-FiraSans  border-b'>
                        <Table.HeadCell></Table.HeadCell>
                        <Table.HeadCell>ID</Table.HeadCell>
                        <Table.HeadCell>Avatar</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Nome</Table.HeadCell>
                        <Table.HeadCell>Sobrenome</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='px-6 py-4'>
                        {data.map((user: {id: number, avatar : string,email: string,firstName:string,lastName: string}, index:number) => {
                          return (
                            <UsersTableRow  
                            key={index}
                            id={user.id}
                            avatar={user.avatar}
                            email={user.email}
                            first_name={user.firstName}  
                            last_name={user.lastName}
                            />
                          )
                        })}
                    </Table.Body>
                </Table>
                </div>
                <div className="flex justify-center space-x-2">
                    {/*
                     {Array.from({ length: maxPages }, (_, i) => (
                        <button onClick={() => setPage(i + 1)} className={`font-FiraSans font-bold ${page == i+1? 'bg-gray-500': 'bg-red-500'}`}>{i + 1}</button>
                    ))} 
                    */}
                    <div className='grid grid-flow-col gap-6 '>
                      <p>Linhas por página 
                      <select 
                          className="font-FiraSans border-none"
                          value={perPage}
                          onChange={(e) => setPerPage(Number(e.target.value) )}
                      >
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                      </select>
                      </p>
                      <p className='mt-1'>1-{perPage} de {totalInfo}</p>
                      <div className='grid grid-flow-col gap-2'>
                        <button onClick={handlePrevious}  className="font-FiraSans ">⟨ </button>
                        <button onClick={handleNext} className='font-FiraSans '>⟩</button>
                      </div>
                    </div>
                </div>
              </div> 
          </div>
        </div>
    </div>
    )
}