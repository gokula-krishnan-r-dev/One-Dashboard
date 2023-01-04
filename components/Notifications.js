import React, { useState, useEffect, useRef } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import Image from "next/image";
import ListNotifications from "./card/ListNotifications";
import { GrNotification } from "react-icons/gr";
import { notifications } from "./data/dataContents"
const Notifications = (props) => {
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
    return (
        <div ref={referenceRef} onClick={handleDropdownClick} className="relative font-play">
            <div className="bg-gray-100 rounded-full p-2">
                <GrNotification size={16} />
            </div>
            <div className="max-w-sm absolute -right-24 top-8 bg-white" ref={popperRef} {...attributes.popper}>
                <DropdownContainer className="shadow-sm flex flex-col" style={styles.offset} visible={visible}>
                    <div className="w-full flex space-x-2 items-center py-6 p-2 border-b ">
                        <GrNotification size={28} />
                        <span>Notification</span>
                    </div>
                    {notifications.map((notifications, index) => (
                        <div key={index}>
                            <ListNotifications notifications={notifications} />
                        </div>
                    ))}
                </DropdownContainer>
            </div>
        </div>
    )

}
const DropdownContainer = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
 
`;
export default Notifications