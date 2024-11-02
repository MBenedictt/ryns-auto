import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

import CarCard from "@/components/CarCard";
import Navbar from "@/components/Navbar";
import CarTypeCard from "@/components/CarTypeCard";
import { faInstagram, faSquareFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [selectedMake, setSelectedMake] = useState('Make');
  const [selectedYear, setSelectedYear] = useState('Year');
  const [selectedPrice, setSelectedPrice] = useState('Price');
  const [makeDropdownOpen, setMakeDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  const makeRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === 'make') {
      setMakeDropdownOpen(!makeDropdownOpen);
      setYearDropdownOpen(false);
      setPriceDropdownOpen(false);
    } else if (dropdown === 'year') {
      setYearDropdownOpen(!yearDropdownOpen);
      setMakeDropdownOpen(false);
      setPriceDropdownOpen(false);
    } else if (dropdown === 'price') {
      setPriceDropdownOpen(!priceDropdownOpen);
      setMakeDropdownOpen(false);
      setYearDropdownOpen(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      makeRef.current && !makeRef.current.contains(event.target as Node) &&
      yearRef.current && !yearRef.current.contains(event.target as Node) &&
      priceRef.current && !priceRef.current.contains(event.target as Node)
    ) {
      setMakeDropdownOpen(false);
      setYearDropdownOpen(false);
      setPriceDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (dropdown: string, value: string) => {
    if (dropdown === 'make') {
      setSelectedMake(value);
      setMakeDropdownOpen(false);
    } else if (dropdown === 'year') {
      setSelectedYear(value);
      setYearDropdownOpen(false);
    } else if (dropdown === 'price') {
      setSelectedPrice(value);
      setPriceDropdownOpen(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="w-full mt-[70px] px-10">
        <div className="w-full h-[600px] bg-[url('/assets/hero-bg.jpeg')] bg-cover bg-top rounded-xl">
          <div className="w-full h-full bg-blue-600 bg-opacity-60 rounded-xl p-10 pt-[120px]">
            <p className="font-semibold text-white mb-1">Are you buying? We are selling</p>
            <h1 className="font-bold text-white text-5xl w-2/6">Find the suitable car for you</h1>
            <div className="bg-white flex justify-between items-center w-fit mt-10 py-3 px-5 rounded-lg">
              <div className="relative inline-block" ref={makeRef}>
                <button
                  id="btnMake"
                  onClick={() => toggleDropdown('make')}
                  className="w-[180px] border-r-2 flex justify-between items-center pr-5 text-neutral-500 hover:text-neutral-800"
                >
                  <span>{selectedMake}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-[14px]" />
                </button>
                {makeDropdownOpen && (
                  <div id="makeDropdown" className="z-10 w-[280px] bg-white absolute top-[50px] border-slate-300 rounded-lg border p-3">
                    <form action="" className="flex items-center border-[1px] border-slate-500 rounded-lg px-5 py-2">
                      <input type="text" className="w-full focus:outline-none" placeholder="Search brand" />
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-2" />
                    </form>
                    <p className="w-full border-b-2 border-slate-300 text-[12px] font-medium mt-5 pb-1">ALL AVAILABLE MAKES</p>
                    <ul className="h-[300px] overflow-y-scroll">
                      {['Toyota', 'Honda', 'Mitsubishi', 'Nissan', 'Suzuki', 'BMW', 'Mercedes', 'Hyundai', 'KIA'].map(make => (
                        <li
                          key={make}
                          onClick={() => handleSelect('make', make)}
                          className="font-semibold py-4 hover:bg-neutral-200 cursor-pointer px-2 border-b border-slate-300"
                        >
                          {make}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative inline-block" ref={yearRef}>
                <button
                  id="btnYear"
                  onClick={() => toggleDropdown('year')}
                  className="w-[180px] border-r-2 flex justify-between items-center px-5 text-neutral-500 hover:text-neutral-800"
                >
                  <span>{selectedYear}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-[14px]" />
                </button>
                {yearDropdownOpen && (
                  <div id="yearDropdown" className="z-10 w-[280px] bg-white absolute top-[50px] border-slate-300 rounded-lg border p-3">
                    <form action="" className="flex items-center border-[1px] border-slate-500 rounded-lg px-5 py-2">
                      <input type="text" className="w-full focus:outline-none" placeholder="Search Year" />
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-2" />
                    </form>
                    <p className="w-full border-b-2 border-slate-300 text-[12px] font-medium mt-5 pb-1">CHOOSE RANGE</p>
                    <ul>
                      {['2020 - 2024', '2015 - 2019', '2010 - 2014', 'Below 2009'].map(yearRange => (
                        <li
                          key={yearRange}
                          onClick={() => handleSelect('year', yearRange)}
                          className="font-semibold py-4 hover:bg-neutral-200 cursor-pointer px-2 border-b border-slate-300"
                        >
                          {yearRange}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative inline-block" ref={priceRef}>
                <button
                  id="btnPrice"
                  onClick={() => toggleDropdown('price')}
                  className="w-[180px] border-r-2 flex justify-between items-center px-5 text-neutral-500 hover:text-neutral-800"
                >
                  <span>{selectedPrice}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-[14px]" />
                </button>
                {priceDropdownOpen && (
                  <div id="priceDropdown" className="z-10 w-[280px] bg-white absolute top-[50px] border-slate-300 rounded-lg border p-3">
                    <form action="" className="flex items-center border-[1px] border-slate-500 rounded-lg px-5 py-2">
                      <input type="text" className="w-full focus:outline-none" placeholder="Search Price" />
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-2" />
                    </form>
                    <p className="w-full border-b-2 border-slate-300 text-[12px] font-medium mt-5 pb-1">CHOOSE RANGE</p>
                    <ul>
                      {['Above Rp. 1 Billion', 'Rp. 900 Million - Rp. 500 Million', 'Rp. 400 Million - Rp. 200 Million', 'Below Rp. 100 Million'].map(priceRange => (
                        <li
                          key={priceRange}
                          onClick={() => handleSelect('price', priceRange)}
                          className="font-semibold py-4 hover:bg-neutral-200 cursor-pointer px-2 border-b border-slate-300"
                        >
                          {priceRange}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button className="bg-blue-600 text-white w-[140px] flex justify-evenly items-center px-2 py-2 ml-5 rounded hover:bg-blue-700">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex px-[80px] py-10 justify-between items-center">
        <Image src="/assets/toyota.png" alt="Toyota" width={100} height={100} className="object-contain opacity-50" />
        <Image src="/assets/honda.png" alt="Honda" width={80} height={80} className="object-contain opacity-50" />
        <Image src="/assets/mitsu.png" alt="Mitsubishi" width={100} height={100} className="object-contain opacity-50" />
        <Image src="/assets/mercedes.png" alt="Mercedes" width={200} height={53} className="object-contain opacity-50" />
        <Image src="/assets/nissan.png" alt="Nissan" width={100} height={100} className="object-contain opacity-50" />
        <Image src="/assets/suzuki.png" alt="Suzuki" width={100} height={100} className="object-contain opacity-50" />
      </div>

      <div className="w-full px-[80px] py-5">
        <h1 className="text-3xl font-bold w-full pb-5">Browse car by type</h1>
        <div className="w-full grid grid-cols-4 gap-5 mt-2">
          <CarTypeCard
            imageSrc="/assets/suv.svg"
            title="SUV"
            amount="8,000"
            link="/"
          />
          <CarTypeCard
            imageSrc="/assets/mpv.svg"
            title="MPV"
            amount="12,000"
            link="/"
          />
          <CarTypeCard
            imageSrc="/assets/sedan.svg"
            title="Sedan"
            amount="3,000"
            link="/"
          />
          <CarTypeCard
            imageSrc="/assets/ev.svg"
            title="Electric"
            amount="1,000"
            link="/"
          />
        </div>
      </div>

      <div className="w-full px-[80px] py-20 flex gap-5">
        <div className="w-2/4 bg-blue-100 rounded-lg py-20 px-[60px] flex justify-between">
          <div className="w-4/6">
            <h1 className="text-2xl font-bold w-4/6 mb-3">Are you looking for a car ?</h1>
            <p className="text-[13px] font-medium text-neutral-500 leading-[24px] mb-7">We offer a wide selection of quality vehicles to help you find the perfect car that meets your needs and style.</p>
            <Link href={"/"} className="py-3 px-4 bg-indigo-600 hover:bg-indigo-800 rounded-lg text-neutral-100 text-sm">Get Started <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="pl-1" /></Link>
          </div>
          <Image src={"/assets/buy.svg"} alt="buy" width={100} height={100} className="object-contain" />
        </div>
        <div className="w-2/4 bg-pink-100 rounded-lg py-20 px-[60px] flex justify-between">
          <div className="w-4/6">
            <h1 className="text-2xl font-bold w-4/6 mb-3">Do you want to sell a car ?</h1>
            <p className="text-[13px] font-medium text-neutral-500 leading-[24px] mb-7">We make selling your car easy and hassle-free. Get a fair price and let us handle the details.</p>
            <Link href={"/"} className="py-3 px-4 bg-black hover:bg-neutral-800 rounded-lg text-neutral-100 text-sm">Get Started <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="pl-1" /></Link>
          </div>
          <Image src={"/assets/sell.svg"} alt="sell" width={120} height={120} className="object-contain" />
        </div>
      </div>

      <div className="w-full px-[80px] pt-5 pb-10">
        <h1 className="text-3xl font-bold w-full border-b-2 border-neutral-200 pb-5">The most searched cars</h1>
        <div className="w-full grid grid-cols-4 gap-5 mt-7">
          <CarCard
            imageSrc="/assets/innova.jpg"
            title="Kijang Innova Reborn - 2021"
            description="2.393 cc, 4-cylinder DOHC, with a maximum power output of 147 HP and 360 Nm torque"
            km="84K Km"
            fuel="Diesel"
            transmission="AT"
            price="Rp. 350.000.000"
            href="/"
          />
          <CarCard
            imageSrc="/assets/xpander.jpg"
            title="Xpander Ultimate - 2019"
            description="1.5L MIVEC DOHC 4-cylinder, generating 103 HP and 141 Nm torque"
            km="73K Km"
            fuel="Petrol"
            transmission="AT"
            price="Rp. 202.000.000"
            href="/"
          />
          <CarCard
            imageSrc="/assets/brio.jpg"
            title="Honda Brio RS - 2022"
            description="1.2L i-VTEC SOHC 4-cylinder, with a maximum power output of 89 HP and 110 Nm torque"
            km="66K Km"
            fuel="Petrol"
            transmission="AT"
            price="Rp. 182.000.000"
            href="/"
          />
          <CarCard
            imageSrc="/assets/almaz.jpg"
            title="Wuling Almaz - 2019"
            description="1.5L turbocharged, with a maximum power output of 140 HP and 250 Nm torque"
            km="59K Km"
            fuel="Petrol"
            transmission="CVT"
            price="Rp. 153.000.000"
            href="/"
          />
        </div>
      </div>

      <div className="w-full px-10 pt-10">
        <div className="w-full bg-slate-100 py-10 px-20 rounded-xl grid grid-cols-4 gap-10">
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
        <div className="flex justify-between items-center py-5 px-[60px]">
          <div className="flex">
            <h1 className="font-semibold">Term of Use</h1>
            <p className="text-neutral-400 ml-2">&copy; 2024 MBenedictt. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href={"https://www.instagram.com/mbenedictt/"}><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href={"/"}><FontAwesomeIcon icon={faTiktok} /></Link>
            <Link href={"/"}><FontAwesomeIcon icon={faSquareFacebook} /></Link>
          </div>
        </div>
      </div>

    </div>

  )
}
