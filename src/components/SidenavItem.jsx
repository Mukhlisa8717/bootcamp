import React from 'react'
import { NavLink } from 'react-router-dom'

const SidenavItem = ({ to, icon: Icon }) => {
  return (
    <li className=" rounded-md p-[10px]">
      <NavLink to={to} />
      <Icon className="text-[#6e8cb8]" />
    </li>
  );
};

export default SidenavItem
