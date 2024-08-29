import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiUser } from "react-icons/fi";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { IDropDown } from "@/interfaces/nav";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const navigate = useNavigate();

  const signedInMenu = [
    { label: `Profile`, icon: <HiOutlineUser size={18} /> },
    { label: `Log Out`, icon: <HiMiniArrowLeftStartOnRectangle size={18} /> },
  ];
  const signedOutMenu = [
    {
      label: `Log In`,
      icon: <HiArrowRightEndOnRectangle size={18} />,
      action: () => navigate(`user/login/`),
    },
    { label: `Register`, icon: <HiOutlineUserPlus size={18} /> },
  ];
  const [dropdownMenuContent, setDropdownMenuContent] = useState<IDropDown[]>(signedOutMenu);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-2 border-secondary p-2 rounded-full cursor-pointer">
        <FiUser size={18} className="text-primary-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownMenuContent.map((item, i) => (
          <DropdownMenuItem
            key={i}
            className="flex justify-between cursor-pointer"
            onClick={item.action}
          >
            <span>{item.label}</span>
            {item.icon}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
