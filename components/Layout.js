
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItemClients, menuItemsAdmin } from './data/dataContents';
import NavBar from './NavBar';
import Image from 'next/image';
import Logo from '../public/img/Logo.svg'
import { RiTeamLine } from "react-icons/ri"
export default function Layout({ children }) {
  const router = useRouter();
  //const data = router.query;
  //console.log(data)
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='border-r w-full md:w-72'>
          <div className="pt-6 pl-8 fixed">
             <Image src={Logo} alt="logo" width={158} height={60}/>
          </div>
          <nav className="mt-28">
            
            <ul>
              {menuItemClients.map(( menu, index)  => (
                <li className='m-2' key={index}>
                    <a className='flex items-center justify-between p-2 pl-6'>
                      <div className='flex items-center space-x-2'>
                        {menu.icon}
                        <Link href={menu.href}>
                            {menu.title}
                        </Link>
                      </div>
                      <div
                        className={`w-[2px] h-[20px] text-white flex items-center text-[10px] ${
                          router.asPath === menu.href && 'text-blue-500 bg-blue-500'
                        }`}
                      >
                        .
                      </div>
                   </a>     
                </li>
              ))}
            </ul>
                    
                    
          </nav>
              
        </aside>
        <main className='flex-1'>
          <NavBar />
          {children}
        </main>
      </div>
    </div>
  );
}