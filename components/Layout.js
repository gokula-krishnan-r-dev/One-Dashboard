
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItemClients } from './data/dataContents';
import NavBar from './NavBar';
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-white border-r w-full md:w-72'>
          {/*
          <nav>
            <ul className='mt-8'>
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
          </nav>
              */}
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}