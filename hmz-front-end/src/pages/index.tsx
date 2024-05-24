import '@/app/globals.css'
import instance from '@/scripts/requests/instance';
import Head from 'next/head';
import { useState } from 'react';

export default function Index({amogus}:{amogus:number[]}) {
const [user, setUser] = useState<{username: string, password: string}>({
    username: '',
    password: ''
    });

const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    instance.post('/login', user)
}
const handleChange = (e :any) =>{
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
}


  return (
   <main className='flex md:flex-row grow flex-col h-screen'>
    <Head>
        <title>Login</title>
    </Head>
    <div className='flex flex-col grow place-content-center h-screen'>
        <div className='grid grid-flow-col  place-content-center '>
            <h1 className='text-[#b1b1b1] font-FiraSans m-32'>Simplificamos <br/>juntos</h1>
        </div>
        <div className='grid grid-flow-col place-content-center '>
            <p className='text-[#b1b1b1] font-FiraSans'>Supply Chain | Industrial | Systems</p>
        </div>
    </div>

    <div className='flex grow bg-[#b1b1b1]  h-screen'>
        <div className='bg-[#f5f5f5] flex flex-col place-content-start flex-grow m-5 rounded-xl '>
            <div className='bg-white rounded-xl grid text-center m-14 h-fit'>
                <p className='text-[#b1b1b1] p-5 font-FiraSans'>LOGO</p>
            </div>
            <div className='text-center font-FiraSans text-[#b1b1b1] '>
                <p>LOGIN</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid'>
                    <input id="username" name="username" type='text' placeholder='USERNAME' className='m-5 p-2 font-FiraSans' required value={user.username} onChange={handleChange}/>
                </div>
                <div className='grid' >
                    <input id="password1" name="password" type='password' placeholder='PASSWORD' className='m-5 p-2 font-FiraSans'  required value={user.password} onChange={handleChange}/>
                </div>
                <div className='grid place-content-center'>
                    <button type="submit" className='m-5 rounded-xl bg-white text-[#b1b1b1] p-3 px-12 hover:scale-110 transition-all font-FiraSans'>
                        LOGAR 
                    </button>
                </div>
            </form>
            <div className='flex flex-row place-content-evenly'>
                <a className='m-2  text-[#b1b1b1] p-10   hover:underline cursor-pointer font-FiraSans' >ESQUECI MINHA SENHA</a>
                <a className=' m-2  text-[#b1b1b1] p-10  hover:underline cursor-pointer font-FiraSans' >CADASTRE-SE</a>
            </div>
        </div>
    </div>    
   </main>
  );
}
