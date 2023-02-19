import { GrNotification } from "react-icons/gr"
import { BiMessageSquareDetail } from "react-icons/bi"
import { AiOutlineMore } from "react-icons/ai"
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb"
import { SlSettings } from "react-icons/sl"
import { MdEdit } from "react-icons/md"
import { CiShop } from "react-icons/ci"
import { IconContext } from "react-icons/lib"
import Image from "next/image"
import Notificationicon2 from "../../public/img/icon/Notificationicon2.svg"
import Notificationicon3 from "../../public/img/icon/Notificationicon3.svg"
//import { US,IN, DE, ID, PH, AU, GB } from 'country-flag-icons/react/3x2'
const optionsData = [
  { option: "All", value: "All" },
  { option: "Draft", value: "Draft" },
  { option: "Pending Review", value: "Pending Review" },
  { option: "Pending Quote", value: "Pending Quote" },
  { option: "Pending Payment", value: "Pending Payment" },
  { option: "In Production", value: "In Production" },
  { option: "In Repair", value: "In Repair" },
  { option: "Delivered", value: "Delivered" },
  { option: "Completed", value: "Completed" },
]
const optionsData2 = [
  { option: "This Week", value: "This Week" },
  { option: "Day", value: "Day" },
  { option: "Month", value: "Month" },
  { option: "Year", value: "Year" },
]
const Days = [
  { option: "1 days", value: "This Week" },
  { option: "2 days", value: "This Week" },
  { option: "3 days", value: "This Week" },
]
const products = [
  {
    id: 1,
    title: "UHS VU-SHOES",
    status: "Pending Review",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_1.png",
    order_id: "OD170720201001",
    progress: 0,
    users: {
      id: 1,
      name: "Angelina Lee",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 2,
    title: "Good One Soda Drinks",
    status: "In Production",
    dateTime: "July 20, 2021",
    img: "/img/product/product_2.png",
    order_id: "OD170720201002",
    progress: 60,
    users: {
      id: 2,
      name: "John Lee",
      img: "/img/user/Avatar_3.png",
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
    ],
  },
  {
    id: 3,
    title: "Terra Across Jacket",
    status: "Pending Payment",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_3.png",
    order_id: "OD170720201003",
    progress: 45,
    users: {
      id: 3,
      name: "Leonardo Lee",
      img: "/img/user/Avatar_4.png",
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
    ],
  },
  {
    id: 4,
    title: "Terra Across Jacket",
    status: "Pending Payment",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_3.png",
    order_id: "OD170720201004",
    progress: 45,
    users: {
      id: 6,
      name: "Cindy Adams",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 5,
    title: "Smart Watch",
    status: "Draft",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_7.png",
    order_id: "OD170720201005",
    progress: 80,
    users: {
      id: 11,
      name: "Barack Silver",
      img: "/img/user/Avatar_5.png",
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
    ],
  },
  {
    id: 6,
    title: "Raami Glass",
    status: "In Repair",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201006",
    progress: 0,
    users: {
      id: 1,
      name: "Angelina Lee",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 7,
    title: "Baby Feeding Bottle",
    status: "Completed",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201007",
    progress: 10,
    users: {
      id: 16,
      name: "Antonie Lee",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 8,
    title: "Baby Feeding Bottle",
    status: "Completed",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 100,
    users: {
      id: 10,
      name: "Christian Lee",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 9,
    title: "Baby Feeding Bottle",
    status: "Completed",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 100,
    users: {
      id: 8,
      name: "Mario Gomez",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
]
const notifications = [
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 2,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "2 hours ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 3,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "7 hours ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 border rounded-full">
        <IconContext.Provider value={{ color: "#13131333", size: "45px" }}>
          <BiMessageSquareDetail size={24} />
        </IconContext.Provider>
      </div>
    ),
  },
  {
    id: 4,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "2 days ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 border-[1px] border-[#13131333] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon3} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 4,
    title: (
      <div>
        "Your <span className="font-[600] ">“Chair”</span> Order{" "}
        <span>#F19395035</span> has been Delivered."
      </div>
    ),
    dateTime: "2 days ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 border-[1px] border-[#13131333] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon3} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div>
        Your quote for <span className="font-[600]">“Sofa Deluxe”</span> Order{" "}
        <span className="font-[600]">#F19395035</span>is ready
      </div>
    ),
    dateTime: "15 min ago",
    item: "Sofa Deluxe",
    img: "/img/product/product_7.png",
    icon: (
      <div className="p-2 bg-[#007AFF1A] flex items-center justify-center w-[52px] h-[42px] rounded-full">
        <Image src={Notificationicon2} alt="Notificationicon2" />
      </div>
    ),
  },
]
const CountryName = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
]
const members = [
  {
    id: 1,
    name: "David Morgan",
    country: "India",
    email: "davidmorgan@teamwork.com",
    img: "img/user/Avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 2,
    name: "David Morgan",
    country: "United States",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 3,
    name: "David Morgan",
    country: "United Kingdom",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 4,
    name: "David Morgan",
    country: "Australia",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 5,
    name: "David Morgan",
    country: "Germany",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 6,
    name: "David Morgan",
    country: "United Kingdom",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 7,
    name: "David Morgan",
    country: "Australia",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
  {
    id: 8,
    name: "David Morgan",
    country: "Germany",
    email: "davidmorgan@teamwork.com",
    img: "img/user/avatar_team.png",
    act: <AiOutlineMore size={24} />,
  },
]
const AddMemberData = [
  {
    id: 0,
    profile: "/img/user/Avatar_team.png",
    Username: "david Morgan",
    buttonText: "Add",
  },
  {
    id: 1,
    profile: "/img/user/Avatar_team.png",
    Username: "david Morgan",
    buttonText: "Invite",
  },
  {
    id: 2,
    profile: "/img/user/Avatar_team.png",
    Username: "david Morgan",
    buttonText: "Invite",
  },
  {
    id: 3,
    profile: "/img/user/Avatar_team.png",
    Username: "david Morgan",
    buttonText: "Invite",
  },
  {
    id: 4,
    profile: "/img/user/Avatar_team.png",
    Username: "david Morgan",
    buttonText: "Invite",
  },
]

const customers = [
  {
    id: 1,
    name: "David Morgan",
    country: {
      name: "india",
      flag: "IN",
    },

    email: "davidmorgan@teamwork.com",
    img: "/img/user/Avatar_6.png",
    total_orders: 150,
    street: "1234 State St",
    city: "Mumbai",
    zipcode: "652323",
    order_id: "CS15072021001",
  },
  {
    id: 2,
    name: "John Morgan",
    country: {
      name: "United States",
      flag: "US",
    },
    email: "johnlmmorgan@teamwork.com",
    img: "/img/user/Avatar_1.png",
    total_orders: 150,
    street: "1234 State St",
    city: "New Yook",
    zipcode: "387643",
    order_id: "CS15072021002",
  },
  {
    id: 3,
    name: "Chris Morgan",
    country: {
      name: "United Kingdom",
      flag: "GB",
    },
    email: "christmorgan@teamwork.com",
    img: "/img/user/Avatar_2.png",
    total_orders: 150,
    street: "1234 State St",
    city: "Liverpool",
    zipcode: "387643",
    order_id: "CS15072021004",
  },
  {
    id: 4,
    name: "Antonie Morgan",
    country: {
      name: "Australia",
      flag: "AU",
    },
    email: "antonmorgan@teamwork.com",
    img: "/img/user/Avatar_3.png",
    total_orders: 150,
    street: "1234 State St",
    city: "Sydney",
    zipcode: "387643",
    order_id: "CS15072021006",
  },
  // {
  //   id: 5,
  //   name: "Cristian Morgan",
  //   country: {
  //     name: "Germany",
  //     flag: "DE",
  //   },
  //   email: "cristiamorgan@teamwork.com",
  //   img: "/img/user/Avatar_4.png",
  //   total_orders: 150,
  //   street: "1234 State St",
  //   city: "Hamburg",
  //   zipcode: "387643",
  //   order_id: "RS15072021009",
  // },
  // {
  //   id: 6,
  //   name: "Jacob Gabriel",
  //   country: {
  //     name: "Philippines",
  //     flag: "PH",
  //   },
  //   email: "jacobgabrielm@teamwork.com",
  //   img: "/img/user/Avatar_2.png",
  //   total_orders: 150,
  //   street: "1234 State St",
  //   city: "Hamburg",
  //   zipcode: "387643",
  //   order_id: "RS15072021009",
  // },
]

const menuItemClients = [
  {
    href: "/client/",
    title: "My Project",
    icon: <SiDatabricks className="text-black" />,
  },
  {
    href: "/client/team",
    title: "Team",
    icon: <RiTeamLine className="text-black" />,
  },
]

const menuItemsAdmin = [
  {
    href: "/admin",
    title: "Overview",
    icon: <SiDatabricks className="text-black" />,
  },
  {
    href: "/admin/customers",
    title: "Customers",
    icon: <TbUsers className="text-black" />,
  },
  {
    href: "/admin/orders",
    title: "Orders",
    icon: <CiShop className="text-black" />,
    subNav: [
      {
        title: "All Type",
        path: "/messages/message1",
      },
      {
        title: "Active",
        path: "/messages/message2",
      },
      {
        title: "Complete",
        path: "/messages/message2",
      },
      {
        title: "Cancel",
        path: "/messages/message2",
      },
    ],
  },
  {
    href: "/admin/messages",
    title: "Messages",
    icon: <BiMessageSquareDetail className="text-black" />,
  },
  {
    href: "/admin/settings",
    title: "Settings",
    icon: <SlSettings className="text-black" />,
    subNav: [
      {
        title: "Personal Inormations",
        path: "/messages/message1",
      },
      {
        title: "Accounts",
        path: "/messages/message2",
      },
      {
        title: "Emails",
        path: "/messages/message2",
      },
      {
        title: "Security",
        path: "/messages/message2",
      },
      {
        title: "Notifications",
        path: "/messages/message2",
      },
      {
        title: "Stripe",
        path: "/messages/message2",
      },
    ],
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
  },
]

const ordersdata = [
  {
    id: 1,
    title: "Alpha UHS-VU Shoes",
    status: "Completed",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_1.png",
    order_id: "OD170720201001",
    progress: 100,
    status_order: "active",
    delivery_date: "07 - 11 - 2021",
    amount: 35,
    users: {
      id: 1,
      name: "Angelina Lee",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 2,
    title: "Good One Soda Drinks",
    status: "In Production",
    dateTime: "July 20, 2021",
    img: "/img/product/product_2.png",
    order_id: "OD170720201002",
    progress: 60,
    status_order: "active",
    delivery_date: "07 - 11 - 2021",
    amount: 40,
    users: {
      id: 2,
      name: "John Doe",
      img: "/img/user/Avatar_4.png",
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
    ],
  },
  {
    id: 3,
    title: "Terra Across Jacket",
    status: "Pending Payment",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_3.png",
    order_id: "OD170720201003",
    progress: 45,
    status_order: "active",
    delivery_date: "07 - 11 - 2021",
    amount: 60,
    users: {
      id: 11,
      name: "Jack Lee",
      img: "/img/user/Avatar_2.png",
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
    ],
  },
  {
    id: 4,
    title: "Terra Across Jacket",
    status: "Pending Payment",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_3.png",
    order_id: "OD170720201004",
    progress: 45,
    status_order: "active",
    delivery_date: "07 - 11 - 2021",
    amount: 70,
    users: {
      id: 8,
      name: "Amir Khan",
      img: "/img/user/Avatar_6.png",
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
    ],
  },
  {
    id: 5,
    title: "Smart Watch",
    status: "Draft",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_7.png",
    order_id: "OD170720201005",
    progress: 60,
    status_order: "active",
    delivery_date: "07 - 11 - 2021",
    amount: 80,
    users: {
      id: 1,
      name: "Michael Mayers",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 6,
    title: "Raami Glass",
    status: "In Repair",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201006",
    progress: 90,
    status_order: "active",
    delivery_date: "07 - 11 - 2021",
    amount: 90,
    users: {
      id: 1,
      name: "Angelina Lee",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
  {
    id: 7,
    title: "Baby Feeding Bottle",
    status: "Completed",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201007",
    progress: 100,
    status_order: "awaiting",
    delivery_date: "07 - 11 - 2021",
    amount: 60,
    users: {
      id: 9,
      name: "Joe Nathan",
      img: "/img/user/Avatar_5.png",
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
    ],
  },
  {
    id: 8,
    title: "Baby Feeding Bottle",
    status: "Completed",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 70,
    status_order: "Draft",
    delivery_date: "07 - 11 - 2021",
    amount: 60,
    users: {
      id: 10,
      name: "Christina Lee",
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
    ],
  },
  {
    id: 9,
    title: "Baby Feeding Bottle",
    status: "In Repair",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 40,
    status_order: "awaiting",
    delivery_date: "07 - 11 - 2021",
    amount: 80,
    users: {
      id: 1,
      name: "Angelina Lee",
      img: "/img/user/Avatar_4.png",
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
    ],
  },
  {
    id: 10,
    title: "Baby Feeding Bottle",
    status: "In Repair",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 70,
    status_order: "awaiting",
    delivery_date: "07 - 11 - 2021",
    amount: 90,
    users: {
      id: 13,
      name: "Angelina Cindy",
      img: "/img/user/Avatar_4.png",
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
    ],
  },
  {
    id: 11,
    title: "Baby Feeding Bottle",
    status: "In Production",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 85,
    status_order: "awaiting",
    delivery_date: "07 - 11 - 2021",
    amount: 56,
    users: {
      id: 1,
      name: "Angelina Lee",
      img: "/img/user/Avatar_3.png",
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
    ],
  },
  {
    id: 12,
    title: "Baby Feeding Bottle",
    status: "In Production",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 75,
    status_order: "awaiting",
    delivery_date: "07 - 11 - 2021",
    amount: 39,
    users: {
      id: 15,
      name: "Antonie Lee",
      img: "/img/user/Avatar_2.png",
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
    ],
  },
  {
    id: 13,
    title: "Baby Feeding Bottle",
    status: "Pending Payment",
    dateTime: "Today at 1.18 PM",
    img: "/img/product/product_6.png",
    order_id: "OD170720201008",
    progress: 55,
    status_order: "awaiting",
    delivery_date: "07 - 11 - 2021",
    amount: 60,
    users: {
      id: 21,
      name: "John Bily",
      img: "/img/user/Avatar_1.png",
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
    ],
  },
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
  AddMemberData,
  optionsData,
  optionsData2,
  Days,
}
