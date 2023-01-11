
import ImgLogo from '../public/img/Logo.svg'
import DropdownUser from './DropdownUser';
import Notifications from './Notifications'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image';
const NavBar = () => {
    return (
        <>
            <header className='bg-white z-10 shadow-sm sticky top-0 left-0 right-0 h-20 flex space-x-4 justify-end items-center'>
                <AiOutlineMenu size={24} className="absolute left-4 sm:hidden block"/>
                <div className='flex items-center space-x-4 px-4'>
                    <span className='font-play font-medium text-base hidden md:block'>Price</span>
                 
                    <Notifications color="white" />
                    <DropdownUser /> 
                    
                    
                </div>
            </header>
        </>
    )
}
export default NavBar