import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <div className="w-full h-[70px] fixed top-0 left-0 flex justify-between items-center px-20 max-lg:px-10 max-md:px-5 bg-white z-50 shadow-md">
            <div className='flex items-center'>
                <Link href="/" className="flex items-center">
                    <Image
                        src="/carlogo.svg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="object-contain max-sm:w-[30px] max-sm:h-[30px]"
                    />
                    <h1 className="font-bold text-2xl text-blue-600 ml-3 italic pb-1 max-sm:text-lg">RYN'S AUTO</h1>
                </Link>
            </div>
            <ul className="flex items-center gap-10">
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            Home
                        </span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/cars" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            Buy Car
                        </span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            Sell Car
                        </span>
                    </Link>
                </li>
                <li className="font-semibold text-neutral-400 hover:text-neutral-600 transition duration-200 max-md:hidden">
                    <Link href="/" className="flex items-center">
                        <span className="mr-3 px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span>Sign Up</span>
                    </Link>
                </li>
            </ul>
            <i onClick={toggleDrawer} className='text-2xl md:hidden hover:bg-neutral-100 py-1 px-2 rounded-xl cursor-pointer'>
                <FontAwesomeIcon icon={faBars} />
            </i>

            <div
                className={`fixed top-0 left-0 z-40 h-screen shadow-xl p-4 bg-white w-80 transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    type="button"
                    onClick={toggleDrawer}
                    className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div className='flex flex-col justify-evenly h-[90%]'>
                    <ul className='flex flex-col items-center'>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/cars" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    Buy Car
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    Sell Car
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-4 border-t-2">

                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center border-t-2 font-semibold text-neutral-400 hover:text-neutral-600 transition duration-200 pt-5'>
                    <Link href="/" className="flex items-center text-xl">
                        <span className="mr-3 px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span >Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;