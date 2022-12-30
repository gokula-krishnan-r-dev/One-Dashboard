

import ImgLogo from '../public/img/Logo.svg'
import DropdownUser from './DropdownUser';
import Notifications from './Notifications'
import Image from 'next/image';
const NavBar = () => {
    return (
        <>
            <header className='bg-white z-10 shadow-sm sticky top-0 h-20 flex space-x-4 justify-between items-center'>
                <div className='w-72 h-20 border-r'>
                    {/*<Image src={ImgLogo} height={90} className="w-60" alt='Logo' /> */}
                </div>
                <div className='flex items-center space-x-4'>
                    <span className='font-play font-medium text-embo'>Price</span>
                    {/*
                    <Notifications color="white" />
                    <DropdownUser color="white" />
                    */}
                </div>
            </header>
        </>
    )
}
export default NavBar