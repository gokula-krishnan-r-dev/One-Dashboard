import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
const PersonalInfo = () =>{
  return(
    <React.Fragment>
         <div className="flex flex-col w-full font-play">   
                    <div className="py-4 w-1/3 border p-4 bg-white">
                        <div className="py-2 flex items-center justify-between">
                            <p className="text-black text-md">My Details</p>
                            <div className="flex space-x-2">
                                <button className="py-2 text-blue-500 p-2 border px-2 text-sm">Cancel</button>
                                <button className="py-2 text-white bg-blue-500 p-2 border px-4 text-sm">Save</button>
                            </div>
                        </div>
                        <div className="py-4 w-full flex items-center justify-between ">
                            <div className="w-1/2">
                                <p className="text-black py-2.5">First Name</p>
                                <input type="text" className="border p-2" value='John' />
                            </div>
                            <div className="w-1/2">
                                <p className="text-black py-2.5">Last Name</p>
                                <input type="text" className="border p-2" value='Steady' />
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-black py-2.5">Email</p>
                            <input type="email" className="border p-2 w-full" value='johnsteady@gmail.com' />
                        </div>
                        <div className="py-2">
                            <p className="py-2">Profile Picture</p>
                            <div className="flex items-center space-x-4">
                                <Image src='/img/user/Avatar_3.png' width={79} height={70} alt="pic" />
                                <div className="w-1/2">
                                    <div class="flex justify-center">
                                        <div className="mb-3 w-full border p-2">
                                            <input type="file"
                                                id="avatar" name="avatar"
                                                accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </React.Fragment>
  )
}

const Account = () =>{
  return(
    <div className="text-black overflow-y-auto h-36 w-96">    
       <p className='py-2 text-black'>This Setting Account</p>
    </div>
  )
}

const EmailSetting = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Component Email</p>
        </div>
    )
}

const SecuritySetting = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Component Security</p>
        </div>
    )
}

const SettingNotification = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Notifications</p>
        </div>
    )
}

const SettingStripe = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Strip</p>
        </div>
    )
}

const TabComponent = () => {
  //console.log(owner)
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
      setActiveTab("tab3")
  }
  const handleTab4 = () => {
    setActiveTab("tab4")
  }

  const handleTab5 = () => {
    setActiveTab("tab5")
  }

  const handleTab6 = () => {
    setActiveTab("tab6")
  }


  return (
    <>
      
      <div className="flex items-center space-x-6 py-4 text-gray-500 font-play text-lg font-medium">
        <p onClick={handleTab1} 
        className={activeTab === "tab1" ? "active text-black border-b-2 border-gray-400 px-2 py-2" : ""} 
        >
            Personal Information
        </p>
        <p 
        onClick={handleTab2} 
        className={activeTab === "tab2" ? "active text-black border-b-2 border-gray-400 px-2 py-2" : ""} 
        >
            Accounts
        </p>

        <p 
        onClick={handleTab3} 
        className={activeTab === "tab3" ? "active text-black border-b-2 border-gray-400 px-2 py-2" : ""} 
        >
            Emails
        </p>
        <p 
        onClick={handleTab4} 
        className={activeTab === "tab4" ? "active text-black border-b-2 border-gray-400 px-2 py-2" : ""} 
        >
            Security
        </p>

        <p 
        onClick={handleTab5} 
        className={activeTab === "tab5" ? "active text-black border-b-2 border-gray-400 px-2 py-2" : ""} 
        >
            Notifications
        </p>

        <p 
        onClick={handleTab6} 
        className={activeTab === "tab6" ? "active text-black border-b-2 border-gray-400 px-2 py-2" : ""} 
        >
            Stripe
        </p>
      </div>
      <div>
         { activeTab === "tab1" ? <PersonalInfo /> : activeTab ===  "tab2" ? <Account  /> : activeTab === "tab4" ? <SecuritySetting /> : activeTab === "tab5" ? <SettingNotification />: activeTab === "tab6" ? <SettingStripe /> : <EmailSetting />}
      </div>
    
    </>
  );
}

export default TabComponent