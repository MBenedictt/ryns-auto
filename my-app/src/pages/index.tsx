import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

import CarCard from "@/components/CarCard";
import Navbar from "@/components/Navbar";

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
                      {['Toyota', 'Honda', 'Mitsubishi', 'Nissan', 'Suzuki', 'BMW', 'Mercedes', 'Wuling', 'Chery'].map(make => (
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
                    <p className="w-full border-b-2 border-slate-300 text-[14px] font-medium mt-3 pb-2">CHOOSE RANGE</p>
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
                    <p className="w-full border-b-2 border-slate-300 text-[14px] font-medium mt-3 pb-2">CHOOSE RANGE</p>
                    <ul>
                      {['Above Rp. 1.000.000.000', 'Rp. 900.000.000 - Rp. 500.000.000', 'Rp. 400.000.000 - Rp. 200.000.000', 'Below Rp. 100.000.000'].map(priceRange => (
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
        <h1 className="text-3xl font-bold">The most searched cars</h1>
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
    </div >
  )
}
