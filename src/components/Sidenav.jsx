import React from 'react'
import SidenavItem from './SidenavItem'
import { FiBarChart } from 'react-icons/fi';
import { MdShoppingBasket } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import logo from "../../public/images/logoD.png";

const Sidenav = () => {
  return (
    <nav className="flex flex-col gap-6 bg-white p-3">
      <img src={logo} alt="logo" />
      <ul className='rounded-md bg-[#f0f3f7]'>
        <SidenavItem to="/dashboard" icon={FiBarChart} />
        <SidenavItem to="/regions" icon={MdShoppingBasket} />
        <SidenavItem to="/settings" icon={IoSettingsSharp} />
      </ul>
    </nav>
  );
}

export default Sidenav
