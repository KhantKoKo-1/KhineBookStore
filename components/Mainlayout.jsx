import React from 'react'
import { MainHeader } from "./MainHeader";
import { MainSidebar } from './MainSidebar';

export const Mainlayout = ({ children }) => {


    return (
        <div className='bg-gray-300 w-screen min-h-screen'>  
            <MainHeader/>
            <div className='flex justify-start items-start'>
                <MainSidebar/>
                <main className='flex-1'>{children}</main>
            </div>
        </div>
    );
};

