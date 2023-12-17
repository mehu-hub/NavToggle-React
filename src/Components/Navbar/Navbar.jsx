import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {
            name: 'Home',
            id: 1,
            path: '/'
        },
        {
            name: 'About',
            id: 2,
            path: '/about'
        },
        {
            name: 'Services',
            id: 3,
            path: '/services'
        },
        {
            name: 'Contact',
            id: 3,
            path: '/contact'
        },
        {
            name: 'Products',
            id: 3,
            path: '/products'
        }
    ];
    return (
        <nav>
            <div className='md:hidden mt-5' onClick={() => { setOpen(!open) }}>
                <span>{open === true ?
                    <XMarkIcon className="h-8 w-8 text-blue-500" />
                    :
                    <Bars3Icon className="h-8 w-8 text-blue-500" />}
                </span>


            </div>
            <ul className={`md:flex absolute md:static justify-center bg-purple-400 p-4 mt-8 duration-500 rounded text-white ${open ? 'top-6' : '-top-48'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;