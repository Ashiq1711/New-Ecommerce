import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4'>
      <NavLink to={"/add"} className={"flex hover:text-white hover:bg-primary  gap-2 items-center border border-slate-300 p-2" }>
      <IoMdAdd className='border rounded-full text-2xl '/>
        <p>Add</p>
      </NavLink>
      <NavLink to={"/list"} className={"flex hover:text-white hover:bg-primary  gap-2 items-center border border-slate-300 p-2" }>
      <FaList />
        <p>List</p>
      </NavLink>
      <NavLink to={"/order"} className={"flex hover:text-white hover:bg-primary  gap-2 items-center border border-slate-300 p-2" }>
      <IoMdReorder />
        <p>Orders</p>
      </NavLink>
      <NavLink to={"/users"} className={"flex hover:text-white hover:bg-primary  gap-2 items-center border border-slate-300 p-2" }>
      <HiUsers />
        <p>Users</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
