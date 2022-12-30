
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItemClients } from './data/dataContents';
import NavBar from './NavBar';
import Image from 'next/image';
import Logo from '../public/img/Logo.svg'
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='border-r w-full md:w-72'>
          <div className="pt-6 pl-8 fixed">
             <Image src={Logo} alt="logo" width={158} height={60}/>
          </div>
    
          <nav className="mt-24 fixed">
            {/*
            <ul>
              {menuItemClients.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  
                    <a
                      className={`flex p-2 bg-white rounded hover:bg-fuchsia-400 cursor-pointer ${
                        router.asPath === href && 'bg-fuchsia-600 text-white'
                      }`}
                    >
                  <Link href={href}>
                  
                      {title}
                   
                  </Link>
                   </a>
                    
                </li>
              ))}
            </ul>
                    */}
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