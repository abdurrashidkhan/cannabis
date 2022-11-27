import React, { useEffect, useState } from 'react';
import { MdMyLocation } from 'react-icons/md';
import { BiCategory, BiDollar } from 'react-icons/bi';
import { FaCannabis, FaLeaf } from 'react-icons/fa';
import Loading from '../Loading/Loading';

const FlitterInfo = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setLocation(data))
  }, [])
  if (!location) {
    return <Loading></Loading>
  }
  return (
    <div className="bg-[#fff] px-4 rounded shadow-2xl py-4 w-full md:w-[30%] mb-6 md:mb-0">
      <div className="">
        <div className="">
          <div className="flex items-center gap-2">
            <h1 className='text-slate-600 font-semibold font-serif'>Location</h1>
            <MdMyLocation className='text-slate-600 font-semibold font-serif'></MdMyLocation>
          </div>
          <hr className='bg-[#D9D9D9] w-full h-[2px] rounded-full mt-2' />
        </div>
        {/* Location */}
        <div className="pt-5">
          <select className="border border-[#D9D9D9] py-2 w-full rounded text-slate-600 font-semibold text-base outline-none">
            <option disabled selected >Choses Your Location</option>
            {
              location.map((country, index) => <>
                <option className="" key={index}>
                  {country?.name?.common}
                </option>
              </>)
            }
          </select>
        </div>
        {/*Category  */}
        <div className="py-8">
          <div>
            <div className="flex items-center gap-2">
              <h1 className=' text-slate-600 font-semibold font-serif'>Category </h1>
              <span className='text-slate-600 font-semibold font-serif'><BiCategory /></span>
            </div>
            <hr className='bg-[#D9D9D9] w-full h-[2px] rounded-full mt-2' />
          </div>
          <div className="pt-5">
            <div className="flex items-center gap-3 py-2  px-2 hover:bg-[#1616163a] duration-700 ease-in-out cursor-pointer rounded">
              <input id='all' type="checkbox" checked className="w-[18px] h-[18px] checkbox checkbox-primary rounded" />
              <label for='all' className='text-slate-800 font-medium w-full cursor-pointer'>All</label>
            </div>
            <div className="flex items-center gap-3 py-2 px-2 hover:bg-[#1616163a] duration-700 ease-in-out cursor-pointer rounded">
              <input id='flower' type="checkbox" className="w-[18px] h-[18px] checkbox checkbox-primary rounded " />
              <label for='flower' className='text-slate-800 w-full font-medium  cursor-pointer'>Flower</label>
            </div>
            <div className="flex items-center gap-3 py-2 px-2 hover:bg-[#1616163a] duration-700 ease-in-out cursor-pointer rounded">
              <input id='trims' type="checkbox" className="w-[18px] h-[18px] checkbox checkbox-primary rounded" />
              <label for='trims' className='text-slate-800 font-medium w-full cursor-pointer'>Trims</label>
            </div>
            <div className="flex items-center gap-3 py-2 px-2 hover:bg-[#1616163a] duration-700 ease-in-out cursor-pointer rounded">
              <input id='biomass' type="checkbox" className="w-[18px] h-[18px] checkbox checkbox-primary rounded" />
              <label for='biomass' className='text-slate-800 font-medium w-full cursor-pointer'>Biomass</label>
            </div>
            <div className="flex items-center gap-3 py-2 px-2 hover:bg-[#1616163a] duration-700 ease-in-out cursor-pointer rounded">
              <input id='oils' type="checkbox" className="w-[18px] h-[18px] checkbox checkbox-primary rounded" />
              <label for='oils' className='text-slate-800 font-medium w-full cursor-pointer'>Oils</label>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="">
          <div className="">
            <h1 className='flex gap-2 items-center text-slate-600 font-semibold font-serif'>Price <span><BiDollar /></span></h1>
            <hr className='bg-[#D9D9D9] w-full h-[2px] rounded-full mt-2' />
          </div>
          <div className="pt-5">
            <div className="flex items-center gap-3">
              <p>$0</p>
              <input type="range" min="0" max="5000" className="range range-primary bg-[#0000002f] range-xs" />
              <p>$5000</p>
            </div>
          </div>
        </div>
        {/* Strain */}
        <div className="">
          <div className="py-5 mt-6">
            <h1 className='flex gap-2 items-center  text-slate-600 font-semibold font-serif'>Strain <span><FaCannabis /></span></h1>
            <hr className='bg-[#D9D9D9] w-full h-[2px] rounded-full mt-2' />
          </div>
          <div className="flex">
            <button className=' w-full py-1 border border-r-0 border-[#a3a3a3] hover:text-primary hover:border-primary'>Strain</button>
            <button className=' w-full py-1 border border-r-0 border-[#a3a3a3] hover:text-primary hover:border-primary'>Hybrid</button>
            <button className=' w-full py-1 border border-[#a3a3a3] hover:text-primary hover:border-primary'>Indica</button>
          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="py-5 mt-6">
            <h1 className='flex gap-2 items-center  text-slate-600 font-semibold font-serif'>Cultivation Type <span><FaLeaf /></span></h1>
            <hr className='bg-[#D9D9D9] w-full h-[2px] rounded-full mt-2' />
          </div>
          <div className="flex">
            <button className=' w-full py-1 border border-r-0 border-[#a3a3a3] hover:text-primary hover:border-primary'>All</button>
            <button className=' w-full py-1 border border-r-0 border-[#a3a3a3] hover:text-primary hover:border-primary'>Indoor</button>
            <button className=' w-full py-1 border border-[#a3a3a3] hover:text-primary hover:border-primary'>OutDoor</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FlitterInfo;