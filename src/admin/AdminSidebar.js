import React, { useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import { Link, NavLink, useNavigation } from 'react-router-dom'
import HumburgerButton from './HumburgerMenu/HumburgerButton';



const AdminSidebar = () => {
    const [open, setOpen] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(true);
    const [showDropdownTour, setShowDropdownTour] = useState(true);
    const [showBlog, setShowBlog] = useState(true);
    // const navigation = useNavigation();

    const handleShowDropdownTour = () => {
        // setShowDropdown(false);
        // setShowDropdownTour(!showDropdownTour)

    }

    const handleShowDropdown = () => {
        // setShowDropdown(!showDropdown);
        // setShowDropdownTour(false)
    }

    const Menus = [
        { title: 'E-commerce', path: '/adminecom', src: <CgProfile /> },
        { title: 'E-commerce', path: '/adminecomcatagory', src: <CgProfile /> },
        { title: 'Tours & Travels', path: '/tourstravels', src: <SiFuturelearn /> },
        { title: 'Passport', path: '/adminpassport', src: <SiFuturelearn /> },
        { title: 'Blog', path: '/adminblog', src: <SiFuturelearn /> },
        { title: 'Users', path: '/createaccount', src: <SiFuturelearn /> },
    ]

    return (
        <>
            <div
                className={`${open ? 'w-96' : 'w-fit'
                    } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${!open && 'rotate-180'
                        } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <br />
                <NavLink to='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        <img src="" alt='' className='pl-2' />
                        {open && (
                            <span className='text-2xl font-bold whitespace-nowrap dark:text-white'>
                                Admin Panel
                            </span>
                        )}
                    </div>
                </NavLink>
                <br />
                <ul className='flex flex-col gap-y-2'>
                    {/* {Menus.map((menu, index) => (
                        <NavLink to={menu.path} key={index}>
                            <li
                                className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                            >
                                <span className='text-2xl'>{menu.title.charAt(0)}</span>
                                <span className='origin-left duration-300 hover:block'>
                                    {menu.title}
                                </span>
                            </li>
                        </NavLink>
                    ))} */}

                    <NavLink to="/adminecom" onClick={() => handleShowDropdown()} className={showDropdown ? "border rounded bg-white text-black font-bold" : "text-white"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white`}
                        >
                            <span className='text-3xl rounded'>E</span>
                            <span className='origin-left duration-300 hover:block'>
                                E-commerce
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/adminecomaddprod" className={showDropdown ? "inline-block" : "hidden"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                        >
                            <span className='origin-right duration-300 hover:block text-right ml-5 '>
                                Add Product
                            </span>
                        </li>
                    </NavLink>

                    <NavLink to="/adminecom" className={showDropdown ? "inline-block" : "hidden"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                        >
                            <span className='origin-right duration-300 hover:block text-right ml-5 '>
                                E-com
                            </span>
                        </li>
                    </NavLink>

                    <NavLink to="/tourstravels" onClick={() => handleShowDropdownTour()} className={showDropdownTour ? "border rounded bg-white text-black font-bold" : "text-white"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white`}
                        >
                            <span className='text-3xl rounded'>T</span>
                            <span className='origin-left duration-300 hover:block'>
                                Tours
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/admintoursadd" className={showDropdownTour ? "inline-block" : "hidden"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                        >
                            <span className='origin-right duration-300 hover:block text-right ml-5 '>
                                Add Tours
                            </span>
                        </li>
                    </NavLink>

                    <NavLink to="/adminblog" onClick={() => handleShowDropdownTour()} className={showDropdownTour ? "border rounded bg-white text-black font-bold" : "text-white"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white`}
                        >
                            <span className='text-3xl rounded'>B</span>
                            <span className='origin-left duration-300 hover:block'>
                                Blogs
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/adminblogadd" className={showDropdownTour ? "inline-block" : "hidden"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                        >
                            <span className='origin-right duration-300 hover:block text-right ml-5 '>
                                Add Blog
                            </span>
                        </li>
                    </NavLink>

                    <NavLink to="/adminlocation" onClick={() => handleShowDropdownTour()} className={showDropdownTour ? "border rounded bg-white text-black font-bold" : "text-white"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white`}
                        >
                            <span className='text-3xl rounded'>B</span>
                            <span className='origin-left duration-300 hover:block'>
                                Location 
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/adminaddlocation" className={showDropdownTour ? "inline-block" : "hidden"}>
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                        >
                            <span className='origin-right duration-300 hover:block text-right ml-5 '>
                                Add Location
                            </span>
                        </li>
                    </NavLink>


                </ul>
            </div>
            <div className="pt-3">
                <HumburgerButton
                    setMobileMenu={setMobileMenu}
                    mobileMenu={mobileMenu}
                />
            </div>
            <div className="sm:hidden">
                <div
                    className={`${mobileMenu ? 'flex' : 'hidden'
                        } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
                >
                    {Menus.map((menu, index) => (
                        <NavLink to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                            >
                                <span className='text-2xl'>{menu.title.charAt(0)}</span>
                                <span className='origin-left duration-300 hover:block'>
                                    {menu.title}
                                </span>
                            </li>
                        </NavLink>
                    ))}

                    <NavLink to="/adminecom">
                        <li
                            className={`flex items-center text-2xl gap-x-6 p-3 text-white font-normal rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}
                            onClick={() => setShowDropdown(true)}
                        >
                            <span className='text-2xl'>E</span>
                            <span className='origin-left duration-300 hover:block'>
                                E-com
                            </span>
                        </li>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default AdminSidebar;