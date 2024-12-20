"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const actions = [
    {id : 1, label : 'Dashboard', route: "/users/dashboard"},
    {id : 2, label : 'Transactions', route: "/users/transactions"},
    {id : 3, label : 'Settings', route: "/users/settings"},
    {id : 4, label : 'Logout', route: "/users/logout"},
]

export const UserAreaSelectBox = () => {
    const [open, setOpen] = useState(false) 
    return (
        <>
            <div className="flex flex-col justify-center items-center relative z-30">
                <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="p-2 cursor-pointer"
                >
                    <span className="border-2 border-blue-600">User Area</span>
                </div>
                <div
                    className={`flex flex-col bg-sky-200 w-40 ml-3 my-3 rounded-lg 
                                ${open ? "opacity-100 h-auto" : "opacity-0 h-0"}
                                transition-all duration-300 overflow-hidden absolute top-12 right-0`}
                >
                    {actions.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-center p-2 hover:bg-sky-300 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <Link href={item.route}> {item.label}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={() => setOpen(false)} className={`bg-gray-100 fixed inset-0 opacity-5 z-0 ${open ? "block" : "hidden"}`}></div>
        </>
    );
}
