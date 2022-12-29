import React, { useState, useEffect, useRef } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";
import ImgAvatar from '../public/img/user/Avatar.png'
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
const DropdownUser = (props) => {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);
  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10]
          }
        }
      ]
    }
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(event) {
    if (referenceRef.current.contains(event.target)) {
      return;
    }
    setVisibility(false);
  }
  function handleDropdownClick(event) {
    setVisibility(!visible);
  }
  const clicked = () => {
    console.log("clicked")
  }

  return (
    <div className="relative">
      <div ref={referenceRef} onClick={handleDropdownClick} className="flex items-center space-x-3 w-[250px]">
        <span className="font-play font-medium">Angeline Lee</span>
        <div className="relative">
          <div className="w-4 h-4 bg-red-600 flex items-center justify-center absolute rounded-full text-white text-[10px] -right-1 -top-1 z-20">
            1
          </div>
          <Image src={ImgAvatar} width={32} height={32} className="rounded-full" alt="avatar" />
        </div>

        <BsChevronDown size={18} />
      </div>
      <div className="w-[250px] absolute top-12" ref={popperRef} {...attributes.popper}>
        <DropdownContainer className="flex flex-col shadow-sm bg-white" style={styles.offset} visible={visible}>
          <a className="text-gray-500 flex space-x-2 items-center space-x-2 py-3 border-b p-2"> <FaRegUserCircle size={22} /><span><Link href="/profile">My Profile</Link></span></a>
          <a className="text-gray-500 flex space-x-2 items-center space-x-2 py-3 p-2"> <CiLogin size={22} /><span>Logh out</span></a>
        </DropdownContainer>
      </div>
    </div>
  );
}

const DropdownContainer = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};

`;



export default DropdownUser;
