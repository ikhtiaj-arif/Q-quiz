import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='flex justify-between align-center bg-purple-400 '>
                  <NavLink to={"/"}>O-Quiz</NavLink>
                <div className={`p-4 flex flex-col bg-purple-400 lg:flex-row absolute duration-500 ease-in-out lg:static ${open ? 'top-6 right-0': 'top-[-200px] right-0'}`}>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/statistics"}>stasts</NavLink>
                    <NavLink to={"/blogs"}>blogs</NavLink>
                </div>
              <div className='lg:hidden h-6 w-6 text-blue-500' onClick={()=>setOpen(!open)}>
              {
                    open ? <XMarkIcon/>: <Bars3CenterLeftIcon />
                }
              </div>
             
            </div>
        </div>
    );
};

export default Header;