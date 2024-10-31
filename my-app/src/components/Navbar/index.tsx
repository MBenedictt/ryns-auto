import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="w-full h-[70px] fixed top-0 left-0 flex justify-between items-center px-20 max-lg:px-10 max-md:px-5 bg-white z-50 shadow-md">
            <Link href="/" className="flex items-center">
                <Image
                    src="/carlogo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                <h1 className="font-bold text-2xl text-blue-600 ml-3 italic pb-1">RYN'S AUTO</h1>
            </Link>
            <div>
                <ul className="flex items-center gap-10">
                    {['Home', 'Buy Cars', 'Sell Cars'].map((item, index) => (
                        <li key={index} className="font-semibold">
                            <Link href="/" className="relative group flex">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    {item}
                                </span>
                            </Link>
                        </li>
                    ))}
                    <li className="font-semibold text-neutral-400 hover:text-neutral-600 transition duration-200">
                        <Link href="/" className="flex items-center">
                            <span className="mr-3 px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span>Sign Up</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;