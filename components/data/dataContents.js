
import { GrNotification } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb";
import { SlSettings } from "react-icons/sl"
import { MdEdit } from "react-icons/md";

const products = [
    {
        id: 1,
        title: "Alpha UHS-VU Shoes",
        status: 'Pending Review',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_1.png",
        order_id : "OD170720201001",
        progress: 15,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id: 2,
        title: "Good One Soda Drinks",
        status: 'In Production',
        dateTime: 'July 20, 2021',
        img: "/img/product/product_2.png",
        order_id : "OD170720201002",
        progress: 60,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            },
        ]
    },
    {
        id: 3,
        title: "Terra Across Jacket",
        status: 'Pending Payment',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_3.png",
        order_id : "OD170720201003",
        progress: 45,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id: 4,
        title: "Terra Across Jacket",
        status: 'Pending Payment',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_3.png",
        order_id : "OD170720201004",
        progress: 45,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id: 5,
        title: "Smart Watch",
        status: 'Draft',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_7.png",
        order_id : "OD170720201005",
        progress: 0,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]

    },
    {
        id: 6,
        title: "Raami Glass",
        status: 'In Repair',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201006",
        progress: 90,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id:7,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201007",
        progress: 100,
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:8,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:9,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
]
const notifications = [
    {
        id: 1,
        title: "Your quote for “Sofa Deluxe” Order #G58408320 is ready",
        dateTime: "15 min ago",
        item: "Sofa Deluxe",
        img: "/img/product/product_7.png",
        icon: <div className="p-2 bg-blue-100 rounded-full"><GrNotification size={24} /></div>
    },
    {
        id: 2,
        title: "How was your delivery? Tell us how you felt about your delivery.",
        dateTime: "2 hours ago",
        item: "Sofa Deluxe",
        img: "/img/product/product_7.png",
        icon: <div className="p-2 bg-blue-100 rounded-full"><GrNotification size={24} /></div>
    },
    {
        id: 3,
        title: "3D Content Studio sent message regarding “Chair” Order #F19395035.",
        dateTime: "7 hours ago",
        item: "Sofa Deluxe",
        img: "/img/product/product_7.png",
        icon: <div className="p-2 border rounded-full"><BiMessageSquareDetail size={24} /></div>
    },
    {  
        id: 4,
        title: "Your “Chair” Order #F19395035 has been Delivered.",
        dateTime: "2 days ago",
        item: "Sofa Deluxe",
        img: "/img/product/product_7.png",
        icon: <div className="p-2 border rounded-full"><GrNotification size={24} /></div>
    },
    
    
    
]
const members = [
    {
        id:1,
        name: "David Morgan",
        country: "India",
        email: "davidmorgan@teamwork.com",
        img: "img/user/Avatar_team.png",
        act: <AiOutlineMore size={24} />
    },
    {
        id:2,
        name: "David Morgan",
        country: "United States",
        email: "davidmorgan@teamwork.com",
        img: "img/user/avatar_team.png",
        act: <AiOutlineMore size={24} />
    },  {
        id:3,
        name: "David Morgan",
        country: "United Kingdom",
        email: "davidmorgan@teamwork.com",
        img: "img/user/avatar_team.png",
        act: <AiOutlineMore size={24} />
    },  {
        id:4,
        name: "David Morgan",
        country: "Australia",
        email: "davidmorgan@teamwork.com",
        img: "img/user/avatar_team.png",
        act: <AiOutlineMore size={24} />
    },
    {
        id:5,
        name: "David Morgan",
        country: "Germany",
        email: "davidmorgan@teamwork.com",
        img: "img/user/avatar_team.png",
        act: <AiOutlineMore size={24} />
    },
]

const customers = [
    {
        id:1,
        name: "David Morgan",
        country: "India",
        email: "davidmorgan@teamwork.com",
        img: "/img/user/Avatar_6.png",
        total_orders: 150
    },
    {
        id:2,
        name: "John Morgan",
        country: "United States",
        email: "davidmorgan@teamwork.com",
        img: "/img/user/Avatar_1.png",
        total_orders: 150
    },  {
        id:3,
        name: "David Morgan",
        country: "United Kingdom",
        email: "davidmorgan@teamwork.com",
        img: "/img/user/Avatar_2.png",
        total_orders: 150
    },  {
        id:4,
        name: "David Morgan",
        country: "Australia",
        email: "davidmorgan@teamwork.com",
        img: "/img/user/Avatar_3.png",
        total_orders: 150
    },
    {
        id:5,
        name: "David Morgan",
        country: "Germany",
        email: "davidmorgan@teamwork.com",
        img: "/img/user/Avatar_4.png",
        total_orders: 150
    },
]


const menuItemClients = [
    {
        href: '/client/',
        title: 'My Project',
        icon : <SiDatabricks className="text-black" />
      },
      {
        href: '/client/team',
        title: 'Team',
        icon: <RiTeamLine className="text-black" />
      },
]

const menuItemsAdmin = [
    {
        href: '/admin',
        title: 'Overview',
        icon : <SiDatabricks className="text-black" />
      },
      {
        href: '/admin/customers',
        title: 'Customers',
        icon: <TbUsers className="text-black" />
      },  
      {
        href: '/admin/orders',
        title: 'Orders',
        icon: <RiTeamLine className="text-black" />
      }, 
       {
        href: '/admin/messages',
        title: 'Messages',
        icon: <BiMessageSquareDetail className="text-black" />
      }, 
      {
        href: '/admin/settings',
        title: 'Settings',
        icon: <SlSettings className="text-black" />
      },
    
]
const dataUser = [
    {
        id: 1,
        img: "img/user/avatar_1.png",
    },
    {
        id: 2,
        img: "img/user/avatar_2.png",
    },
    {
        id: 3,
        img: "img/user/avatar_3.png",
    },
    {
        id: 4,
        img: "img/user/avatar_4.png",
    }
]

const ordersdata = [
    {
        id: 1,
        title: "Alpha UHS-VU Shoes",
        status: 'Pending Review',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_1.png",
        order_id : "OD170720201001",
        progress: 15,
        status_order: 'active',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id: 2,
        title: "Good One Soda Drinks",
        status: 'In Production',
        dateTime: 'July 20, 2021',
        img: "/img/product/product_2.png",
        order_id : "OD170720201002",
        progress: 60,
        status_order: 'active',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            },
        ]
    },
    {
        id: 3,
        title: "Terra Across Jacket",
        status: 'Pending Payment',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_3.png",
        order_id : "OD170720201003",
        progress: 45,
        status_order: 'active',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id: 4,
        title: "Terra Across Jacket",
        status: 'Pending Payment',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_3.png",
        order_id : "OD170720201004",
        progress: 45,
        status_order: 'active',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id: 5,
        title: "Smart Watch",
        status: 'Draft',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_7.png",
        order_id : "OD170720201005",
        progress: 0,
        status_order: 'active',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]

    },
    {
        id: 6,
        title: "Raami Glass",
        status: 'In Repair',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201006",
        progress: 90,
        status_order: 'active',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/Avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/Avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/Avatar_4.png",
            }
        ]
    },
    {
        id:7,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201007",
        progress: 100,
        status_order: 'awaiting',
        team: [
            {
                id: 1,
                img: "/img/user/Avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:8,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:9,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        status_order: 'awaiting',
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:10,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        status_order: 'awaiting',
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:11,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        status_order: 'awaiting',
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:12,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        status_order: 'awaiting',
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    },
    {
        id:13,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 100,
        status_order: 'awaiting',
        team: [
            {
                id: 1,
                img: "/img/user/avatar_1.png",
            },
            {
                id: 2,
                img: "/img/user/avatar_2.png",
            },
            {
                id: 3,
                img: "/img/user/avatar_3.png",
            },
            {
                id: 4,
                img: "/img/user/avatar_4.png",
            }
        ]
    }
]
export {
    menuItemsAdmin,
    dataUser,
    ordersdata,
    members,
    customers,
    products,
    notifications,
    menuItemClients,
};