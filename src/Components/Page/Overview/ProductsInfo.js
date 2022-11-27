import React from 'react';
import { AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai';
import fastImage from '../../../assert/images/1.png'
import secoundImage from '../../../assert/images/Rectangle 30.png'
import therdImage from '../../../assert/images/Rectangle 33.png'
import foreImage from '../../../assert/images/Rectangle 30.png'
import fiveImage from '../../../assert/images/Rectangle 45.png'
import sixImage from '../../../assert/images/1.png'
import { FaCrown } from 'react-icons/fa';


const ProductsInfo = () => {
  return (
    <div className="bg-[#fff] px-4 rounded shadow-2xl py-4 w-[100%]">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            <tr className='border-b border-[#9c9c9c]'>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-[80px] h-[80px] rounded">
                      <img src={fastImage} className=" rounded" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <h1 className='text-slate-700 font-medium text-sm'>ACDC #08 Outdoor</h1>
                      <p className='text-slate-500 text-xs'>The Green Bull 2 LLC</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <p className='text-xs flex'>THC <span>10%</span></p>
                  <input type="range" min="0" max="500" value='60' className="range range-primary bg-[#0000002f] range-xs" />
                  <p className='text-xs flex'>CBD <span>50%</span></p>
                  <input type="range" min="0" max="500" value='300' className="range range-primary bg-[#0000002f] range-xs" />
                </div>
              </td>
              <td>
                <div className="" >
                  <h3 className='text-slate-700 text-xs'>Asking Price</h3>
                  <h1 className='text-base font-medium '>$600.00/lb</h1>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <span className='text-center inline-block '><FaCrown className='text-[#23be2a] text-2xl' /></span>
                  <h1 className=''>Awarded</h1>
                </div>
              </td>
              <th>
                <tr><button className="text-center text-[#fff] rounded px-4  w-full bg-[#23be2a]">Bid</button></tr>
                <tr><button className="text-center text-[#fff] rounded px-4 mt-2 w-full bg-[#23be2a]">View</button></tr>
              </th>
              <hr className='w-full h-[3px] bg-[#aaaaaa8c]' />
            </tr>
            <tr className='border-b border-[#9c9c9c]'>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-[80px] h-[80px] rounded">
                      <img src={secoundImage} className=" rounded" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <h1 className='text-slate-700 font-medium text-sm'>ACDC #08 Outdoor</h1>
                      <p className='text-slate-500 text-xs'>The Green Bull 2 LLC</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <p className='text-xs flex'>THC <span>10%</span></p>
                  <input type="range" min="0" max="500" value='60' className="range range-primary bg-[#0000002f] range-xs" />
                  <p className='text-xs flex'>CBD <span>50%</span></p>
                  <input type="range" min="0" max="500" value='300' className="range range-primary bg-[#0000002f] range-xs" />
                </div>
              </td>
              <td>
                <div className="" >
                  <h3 className='text-slate-700 text-xs'>Asking Price</h3>
                  <h1 className='text-base font-medium '>$600.00/lb</h1>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <span className='text-center inline-block '><AiOutlineClose className='text-[#F78383] text-2xl' /></span>
                  <h1 className='text-[#F78383]'>Close</h1>
                </div>
              </td>
              <th>
                <tr><button className="text-center text-[#fff] rounded px-4  w-full bg-[#23be2a]">Bid</button></tr>
                <tr><button className="text-center text-[#fff] rounded px-4 mt-2 w-full bg-[#23be2a]">View</button></tr>
              </th>
              <hr className='w-full h-[3px] bg-[#aaaaaa8c]' />
            </tr>
            <tr className='border-b border-[#9c9c9c]'>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-[80px] h-[80px] rounded">
                      <img src={therdImage} className=" rounded" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <h1 className='text-slate-700 font-medium text-sm'>ACDC #08 Outdoor</h1>
                      <p className='text-slate-500 text-xs'>The Green Bull 2 LLC</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <p className='text-xs flex'>THC <span>10%</span></p>
                  <input type="range" min="0" max="500" value='60' className="range range-primary bg-[#0000002f] range-xs" />
                  <p className='text-xs flex'>CBD <span>50%</span></p>
                  <input type="range" min="0" max="500" value='300' className="range range-primary bg-[#0000002f] range-xs" />
                </div>
              </td>
              <td>
                <div className="" >
                  <h3 className='text-slate-700 text-xs'>Asking Price</h3>
                  <h1 className='text-base font-medium '>$600.00/lb</h1>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <span className='text-center inline-block '><AiOutlineClockCircle className='text-[#F0BC37] text-2xl' /></span>
                  <h1 className='text-[#F0BC37]'>Pending</h1>
                </div>
              </td>
              <th>
                <tr><button className="text-center text-[#fff] rounded px-4  w-full bg-[#23be2a]">Bid</button></tr>
                <tr><button className="text-center text-[#fff] rounded px-4 mt-2 w-full bg-[#23be2a]">View</button></tr>
              </th>
              <hr className='w-full h-[3px] bg-[#aaaaaa8c]' />
            </tr>
            <tr className='border-b border-[#9c9c9c]'>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-[80px] h-[80px] rounded">
                      <img src={foreImage} className=" rounded" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <h1 className='text-slate-700 font-medium text-sm'>ACDC #08 Outdoor</h1>
                      <p className='text-slate-500 text-xs'>The Green Bull 2 LLC</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <p className='text-xs flex'>THC <span>10%</span></p>
                  <input type="range" min="0" max="500" value='60' className="range range-primary bg-[#0000002f] range-xs" />
                  <p className='text-xs flex'>CBD <span>50%</span></p>
                  <input type="range" min="0" max="500" value='300' className="range range-primary bg-[#0000002f] range-xs" />
                </div>
              </td>
              <td>
                <div className="" >
                  <h3 className='text-slate-700 text-xs'>Asking Price</h3>
                  <h1 className='text-base font-medium '>$600.00/lb</h1>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <span className='text-center inline-block '><AiOutlineClockCircle className='text-[#F0BC37] text-2xl' /></span>
                  <h1 className='text-[#F0BC37]'>Pending</h1>
                </div>
              </td>
              <th>
                <tr><button className="text-center text-[#fff] rounded px-4  w-full bg-[#23be2a]">Bid</button></tr>
                <tr><button className="text-center text-[#fff] rounded px-4 mt-2 w-full bg-[#23be2a]">View</button></tr>
              </th>
              <hr className='w-full h-[3px] bg-[#aaaaaa8c]' />
            </tr>
            <tr className='border-b border-[#9c9c9c]'>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-[80px] h-[80px] rounded">
                      <img src={fiveImage} className=" rounded" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <h1 className='text-slate-700 font-medium text-sm'>ACDC #08 Outdoor</h1>
                      <p className='text-slate-500 text-xs'>The Green Bull 2 LLC</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <p className='text-xs flex'>THC <span>10%</span></p>
                  <input type="range" min="0" max="500" value='60' className="range range-primary bg-[#0000002f] range-xs" />
                  <p className='text-xs flex'>CBD <span>50%</span></p>
                  <input type="range" min="0" max="500" value='300' className="range range-primary bg-[#0000002f] range-xs" />
                </div>
              </td>
              <td>
                <div className="" >
                  <h3 className='text-slate-700 text-xs'>Asking Price</h3>
                  <h1 className='text-base font-medium '>$600.00/lb</h1>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <span className='text-center inline-block '><FaCrown className='text-[#23be2a] text-2xl' /></span>
                  <h1 className=''>Awarded</h1>
                </div>
              </td>
              <th>
                <tr><button className="text-center text-[#fff] rounded px-4  w-full bg-[#23be2a]">Bid</button></tr>
                <tr><button className="text-center text-[#fff] rounded px-4 mt-2 w-full bg-[#23be2a]">View</button></tr>
              </th>
              <hr className='w-full h-[3px] bg-[#aaaaaa8c]' />
            </tr>
            <tr className='border-b border-[#9c9c9c]'>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-[80px] h-[80px] rounded">
                      <img src={sixImage} className=" rounded" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <h1 className='text-slate-700 font-medium text-sm'>ACDC #08 Outdoor</h1>
                      <p className='text-slate-500 text-xs'>The Green Bull 2 LLC</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <p className='text-xs flex'>THC <span>10%</span></p>
                  <input type="range" min="0" max="500" value='60' className="range range-primary bg-[#0000002f] range-xs" />
                  <p className='text-xs flex'>CBD <span>50%</span></p>
                  <input type="range" min="0" max="500" value='300' className="range range-primary bg-[#0000002f] range-xs" />
                </div>
              </td>
              <td>
                <div className="" >
                  <h3 className='text-slate-700 text-xs'>Asking Price</h3>
                  <h1 className='text-base font-medium '>$600.00/lb</h1>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <span className='text-center inline-block '><FaCrown className='text-[#23be2a] text-2xl' /></span>
                  <h1 className=''>Awarded</h1>
                </div>
              </td>
              <th>
                <tr><button className="text-center text-[#fff] rounded px-4  w-full bg-[#23be2a]">Bid</button></tr>
                <tr><button className="text-center text-[#fff] rounded px-4 mt-2 w-full bg-[#23be2a]">View</button></tr>
              </th>
              <hr className='w-full h-[3px] bg-[#aaaaaa8c]' />
            </tr>

          </tbody>

        </table>
        <div className="text-center mt-8">
          <div className="btn-group gap-2">
            <button className="text-slate-400 btn  btn-sm hover:bg-slate-500 hover:border-none  "> &#60; </button>
            <button className="text-slate-400 btn  btn-sm hover:bg-slate-500 hover:border-none  ">1</button>
            <button className="text-slate-400 btn  btn-sm hover:bg-slate-500 hover:border-none  btn-active">2</button>
            <button className="text-slate-400 btn  btn-sm hover:bg-slate-500 hover:border-none  ">3</button>
            <button className="text-slate-400 btn  btn-sm hover:bg-slate-500 hover:border-none  ">4</button>
            <button className="text-slate-400 btn  btn-sm hover:bg-slate-500 hover:border-none  ">&#62;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;