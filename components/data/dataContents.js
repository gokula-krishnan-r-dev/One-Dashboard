
import { GrNotification } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb";
import { SlSettings } from "react-icons/sl"
import { MdEdit } from "react-icons/md";
import { CiShop } from "react-icons/ci";
//import { US,IN, DE, ID, PH, AU, GB } from 'country-flag-icons/react/3x2'


const products = [
    {
        id: 1,
        title: "Alpha UHS-VU Shoes",
        status: 'Pending Review',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_1.png",
        order_id : "OD170720201001",
        progress: 25,
        users: {
            id: 1,
            name: "Angelina Lee",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 2,
            name: "John Lee",
            img: "/img/user/Avatar_3.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
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
        users: {
            id: 3,
            name: "Leonardo Lee",
            img: "/img/user/Avatar_4.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 6,
            name: "Cindy Adams",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 11,
            name: "Barack Silver",
            img: "/img/user/Avatar_5.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 1,
            name: "Angelina Lee",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 16,
            name: "Antonie Lee",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 10,
            name: "Christian Lee",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        users: {
            id: 8,
            name: "Mario Gomez",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
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
        country: {
            name: "india",
            flag: "IN"
        },
        
        email: "davidmorgan@teamwork.com",
        img: "/img/user/Avatar_6.png",
        total_orders: 150,
        street : '1234 State St',
        city: "Mumbai",
        zipcode: '652323',
        order_id: 'CS15072021001',

    },
    {
        id:2,
        name: "John Morgan",
        country: {
            name: "United States",
            flag: "US"
        },
        email: "johnlmmorgan@teamwork.com",
        img: "/img/user/Avatar_1.png",
        total_orders: 150,
        street: '1234 State St',
        city: "New Yook",
        zipcode: "387643",
        order_id: 'CS15072021002',
    },  {
        id:3,
        name: "Chris Morgan",
        country: {
            name: "United Kingdom",
            flag: "GB"
        },
        email: "christmorgan@teamwork.com",
        img: "/img/user/Avatar_2.png",
        total_orders: 150,
        street: '1234 State St',
        city: "Liverpool",
        zipcode: "387643",
        order_id: 'CS15072021004',
    },  {
        id:4,
        name: "Antonie Morgan",
        country: {
            name: "Australia",
            flag: "AU"
        },
        email: "antonmorgan@teamwork.com",
        img: "/img/user/Avatar_3.png",
        total_orders: 150,
        street: '1234 State St',
        city: "Sydney",
        zipcode: "387643",
        order_id: 'CS15072021006',
    },
    {
        id:5,
        name: "Cristian Morgan",
        country: {
            name: "Germany",
            flag: "DE"
        },
        email: "cristiamorgan@teamwork.com",
        img: "/img/user/Avatar_4.png",
        total_orders: 150,
        street: '1234 State St',
        city: "Hamburg",
        zipcode: "387643",
        order_id: 'RS15072021009',
    },
    {
        id:6,
        name: "Jacob Gabriel",
        country: {
            name: "Philippines",
            flag: "PH"
        },
        email: "jacobgabrielm@teamwork.com",
        img: "/img/user/Avatar_2.png",
        total_orders: 150,
        street: '1234 State St',
        city: "Hamburg",
        zipcode: "387643",
        order_id: 'RS15072021009',
    }
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
        icon : <SiDatabricks className="text-black" />,
      },
      {
        href: '/admin/customers',
        title: 'Customers',
        icon: <TbUsers className="text-black" />,
      },  
      {
        href: '/admin/orders',
        title: 'Orders',
        icon: <CiShop className="text-black" />,
        subNav: [
            {
              title: 'All Type',
              path: '/messages/message1',
            },
            {
              title: 'Active',
              path: '/messages/message2',
            },
            {
                title: 'Complete',
                path: '/messages/message2',
            },
            {
                title: 'Cancel',
                path: '/messages/message2',
            }
        ]
      }, 
       {
        href: '/admin/messages',
        title: 'Messages',
        icon: <BiMessageSquareDetail className="text-black" />,
        
      }, 
      {
        href: '/admin/settings',
        title: 'Settings',
        icon: <SlSettings className="text-black" />,
        subNav: [
            {
              title: 'Personal Inormations',
              path: '/messages/message1',
            },
            {
              title: 'Accounts',
              path: '/messages/message2',
            },
            {
                title: 'Emails',
                path: '/messages/message2',
            },
            {
                title: 'Security',
                path: '/messages/message2',
            },
            {
                title: 'Notifications',
                path: '/messages/message2',
            },
            {
             
                title: 'Stripe',
                path: '/messages/message2',   
            }
        ]
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
        img: "img/user/avatar_4.png"
    }
]

const ordersdata = [
    {
        id: 1,
        title: "Alpha UHS-VU Shoes",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_1.png",
        order_id : "OD170720201001",
        progress: 100,
        status_order: 'active',
        delivery_date: '07 - 11 - 2021',
        amount: 35,
        users: {
            id: 1,
            name: "Angelina Lee",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        delivery_date: '07 - 11 - 2021',
        amount: 40,
        users: {
            id: 2,
            name: "John Doe",
            img: "/img/user/Avatar_4.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
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
        delivery_date: '07 - 11 - 2021',
        amount: 60,
        users: {
            id: 11,
            name: "Jack Lee",
            img: "/img/user/Avatar_2.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        delivery_date: '07 - 11 - 2021',
        amount: 70,
        users: {
            id: 8,
            name: "Amir Khan",
            img: "/img/user/Avatar_6.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        delivery_date: '07 - 11 - 2021',
        amount: 80,
        users: {
            id: 1,
            name: "Michael Mayers",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        delivery_date: '07 - 11 - 2021',
        amount: 90,
        users: {
            id: 1,
            name: "Angelina Lee",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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
        delivery_date: '07 - 11 - 2021',
        amount: 60,
        users: {
            id: 9,
            name: "Joe Nathan",
            img: "/img/user/Avatar_5.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
        ]
    },
    {
        id:8,
        title: "Baby Feeding Bottle",
        status: 'Completed',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 70,
        status_order: 'Draft',
        delivery_date: '07 - 11 - 2021',
        amount: 60,
        users: {
            id: 10,
            name: "Christina Lee"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
        ]
    },
    {
        id:9,
        title: "Baby Feeding Bottle",
        status: 'In Repair',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 40,
        status_order: 'awaiting',
        delivery_date: '07 - 11 - 2021',
        amount: 80,
        users: {
            id: 1,
            name: "Angelina Lee",
            img: "/img/user/Avatar_4.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
        ]
    },
    {
        id:10,
        title: "Baby Feeding Bottle",
        status: 'In Repair',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 70,
        status_order: 'awaiting',
        delivery_date: '07 - 11 - 2021',
        amount: 90,
        users: {
            id: 13,
            name: "Angelina Cindy",
            img: "/img/user/Avatar_4.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
        ]
    },
    {
        id:11,
        title: "Baby Feeding Bottle",
        status: 'In Production',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 85,
        status_order: 'awaiting',
        delivery_date: '07 - 11 - 2021',
        amount: 56,
        users: {
            id: 1,
            name: "Angelina Lee",
            img: "/img/user/Avatar_3.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
        ]
    },
    {
        id:12,
        title: "Baby Feeding Bottle",
        status: 'In Production',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 75,
        status_order: 'awaiting',
        delivery_date: '07 - 11 - 2021',
        amount: 39,
        users: {
            id: 15,
            name: "Antonie Lee",
            img: "/img/user/Avatar_2.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
        ]
    },
    {
        id:13,
        title: "Baby Feeding Bottle",
        status: 'Pending Payment',
        dateTime: 'Today at 1.18 PM',
        img: "/img/product/product_6.png",
        order_id : "OD170720201008",
        progress: 55,
        status_order: 'awaiting',
        delivery_date: '07 - 11 - 2021',
        amount: 60,
        users: {
            id: 21,
            name: "John Bily",
            img: "/img/user/Avatar_1.png"
        },
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
            {
                id: 5,
                img: "/img/user/add_now.png",
            },
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