import '@/app/globals.css'
import Sidebar from '@/components/sidebar';
import TopBar from "@/components/topbar";

export default function Usuarios() {
    return(
    <div className='flex md:flex-row grow flex-col h-screen bg-[#b1b1b1]'>
        <TopBar/>
        <Sidebar/>
    </div>
    )
}