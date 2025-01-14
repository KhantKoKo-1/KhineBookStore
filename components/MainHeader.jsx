"use client"
import { MenuContext } from '@/context/MenuContext';
import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { UserAreaSelectBox } from './UserAreaSelectBox';
import { LanguageSelectBox } from './LanguageSelectBox';

export const MainHeader = () => {
    const { toggle } = useContext(MenuContext)
    return (
        <div className='bg-white flex justify-between items-center px-4 h-12 mb-2'>
            <div> Brand Name </div>
            <div className='flex justify-center items-center gap-4'>
                <div onClick={toggle} className='lg:hidden'>
                    <FaBars className='cursor-pointer' />
                </div>
                <div>
                    <LanguageSelectBox/>
                </div>
                <div>
                    <UserAreaSelectBox/>
                </div>
                
            </div>
        </div>
    )
}
