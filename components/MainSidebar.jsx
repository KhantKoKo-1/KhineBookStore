"use client"
import React, { useContext } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { MenuContext } from '@/context/MenuContext';

export const MainSidebar = () => {
    const { open } = useContext(MenuContext);
    return (
            <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${open ? "w-60 p-4" : "w-0"} lg:w-60 lg:p-4`}>
            <ul>
                <li className='flex justify-start items-center rounded-lg hover:bg-blue-300 hover:text-blue-800'>
                    <AiOutlineHome className='mr-2' />
                    <Link className='flex-1' href="/"><h1>Home</h1></Link>
                    <FaAngleRight />
                </li>
                <li className='flex justify-start items-center rounded-lg hover:bg-blue-300 hover:text-blue-800'>
                    <AiOutlineHome className='mr-2' />
                    <Link className='flex-1' href="/"><h1>Home</h1></Link>
                    <FaAngleRight />
                </li>
            </ul>
        </aside>
    )
}
