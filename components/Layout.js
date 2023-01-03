
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItemClients, menuItemsAdmin } from './data/dataContents';
import NavBar from './NavBar';
import Image from 'next/image';
import Logo from '../public/img/Logo.svg'
import React, { useState, useEffect } from "react";
import HelpCenter from './HelpCenter';
import { RiTeamLine } from "react-icons/ri"
export default function Layout({ children }) {
  const [pageUrl, setPageUrl] = useState('')
  const [currentShow, setShow] = useState(false)
  const [currentSetting, setSettings] = useState(false)
  const router = useRouter();
  useEffect(() => {
    setPageUrl(window.location.pathname)
  })

  const menuItem = pageUrl.substr(1, 4) == 'admi' ? menuItemsAdmin : menuItemClients

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='border-r w-full md:w-64'>
          <div className="pt-6 pl-8 fixed">
            <Image src={Logo} alt="logo" width={158} height={60} />
          </div>
          <nav className="mt-28">
            <ul className='fixed'>
              {menuItem.map((menu, index) => (
                
                <li className='w-64' key={index}>
                   
                  <a className={`flex items-center justify-between p-2 pl-6 text-gray-400 font-semibold ${router.asPath === menu.href && 'text-gray-900'}`}>
                    {menu.title == 'Orders' ? <div className='flex items-center space-x-2 space mt-3 font-play' onClick={() => setShow(!currentShow)}> {/*setSettings(!currentSetting) */}
                      {menu.icon}
                      <Link href={menu.href}>
                        {menu.title}
                      </Link>
                    </div> : menu.title == 'Settings' ?
                      <div className='flex items-center space-x-2 space mt-3 font-play' onClick={() => setSettings(!currentSetting)}> {/*setSettings(!currentSetting) */}
                        {menu.icon}
                        <Link href={menu.href}>
                          {menu.title}
                        </Link>
                      </div> :

                      <div className='flex items-center space-x-2 space mt-3 font-play'>
                        {menu.icon}
                        <Link href={menu.href}>
                          {menu.title}
                        </Link>
                      </div>
                    }

                    <div
                      className={`w-[2px] h-[30px] text-white flex items-center text-[10px] ${router.asPath === menu.href && 'text-blue-500 bg-blue-500'
                        }`}
                    >
                      
                    </div>
                  </a>
                  {menu.title == 'Orders' && currentShow ? <ul className='pl-12 pt-2 text-sm font-play'>
                    <li className='text-gray-400 py-1'>All Type</li>
                    <li className='text-gray-400 py-1'>Active</li>
                    <li className='text-gray-400 py-1'>Complete</li>
                    <li className='text-gray-400 py-1'>Cancel</li>
                  </ul> : menu.title == 'Settings' && currentSetting ? <ul className='pl-12 pt-2 text-sm font-play'>
                    <li className='text-gray-400 py-1'>Personal Informations</li>
                    <li className='text-gray-400 py-1'>Accounts</li>
                    <li className='text-gray-400 py-1'>Emails</li>
                    <li className='text-gray-400 py-1'>Security</li>
                    <li className='text-gray-400 py-1'>Notifications</li>
                    <li className='text-gray-400 py-1'>Stripe</li>
                  </ul> : null
                  }

                </li>
              ))}

            </ul>
          </nav>
          
          <div className='p-8 fixed bottom-0'>
            <HelpCenter />
          </div>

        </aside>
        <main className='flex-1'>
          <NavBar />
          {children}
        </main>
      </div>
    </div>
  );
}