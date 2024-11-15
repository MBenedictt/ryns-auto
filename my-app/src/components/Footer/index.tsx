import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faSquareFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full px-10 pt-10 max-md:px-7">
            <div className="w-full bg-slate-100 py-10 px-20 rounded-xl grid grid-cols-4 gap-10 max-lg:px-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                <ul>
                    <li className="font-bold py-[8px]">About</li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>How it works</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Careers</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>About us</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Media</Link></li>
                </ul>
                <ul>
                    <li className="font-bold py-[8px]">Community</li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Against discrimination</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Invite friends</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Gift card</Link></li>
                </ul>
                <ul>
                    <li className="font-bold py-[8px]">Become a seller</li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Add your vehicle</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Business account</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Resource center</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Community</Link></li>
                </ul>
                <ul>
                    <li className="font-bold py-[8px]">Booking support</li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Help center</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Support</Link></li>
                    <li className="font-medium text-neutral-400 py-[8px] hover:text-neutral-600"><Link href={"/"}>Trust & safety</Link></li>
                </ul>
            </div>
            <div className="flex justify-between items-center py-5 px-[60px] max-sm:px-0 max-sm:flex-col">
                <div className="flex">
                    <h1 className="font-semibold max-sm:text-[12px]">Term of Use</h1>
                    <p className="text-neutral-400 ml-2 max-sm:text-[12px]">&copy; 2024 MBenedictt. All rights reserved.</p>
                </div>
                <div className="flex gap-4 max-sm:mt-3">
                    <Link href={"https://www.instagram.com/mbenedictt/"}><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link href={"/"}><FontAwesomeIcon icon={faTiktok} /></Link>
                    <Link href={"/"}><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;