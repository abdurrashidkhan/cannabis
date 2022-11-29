import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading/Loading';
import { signOut } from 'firebase/auth';
import CustomLink from './CustomLink/CustomLink';
import Navbar from './Navbar/Navbar';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdDashboard, MdMyLocation } from 'react-icons/md';
import { GrInstall } from 'react-icons/gr';
import brandLogo from '../../assert/images/Cannabis_Connector_1-removebg-preview 1.png'
import { AiFillCarryOut, AiFillSetting } from 'react-icons/ai';
import hummnerIcon from '../../../src/assert/images/icon.png';


const IndexMin = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      <div className="container mx-auto px-2 lg:px-0">
        <div className="drawer drawer-mobile ">
          <input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex flex-col bg-[#F2F2F2] pb-6" id='total_content'>
            {/* this is navbar */}
            <Navbar></Navbar>
            {/* <!-- Page content here --> */}
            <div className="text-left mt-12 fixed" style={{ zIndex: '1111111' }}>
              <label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span>
                <HiOutlineMenuAlt2 className='w-10 h-10' />
              </span> </label>
            </div>
            <div className="">
              <div id="header" className='py-6 px-4'>
                <div className="">
                  <h1 className='text-slate-700 text-2xl font-serif font-semibold'>Auction</h1>
                  <p className='pt-2 font-semibold text-slate-600'>Explore and bid on your desired product based on several filters.</p>
                </div>
              </div>
              <div className="text-left px-3">
                <Outlet></Outlet>
              </div>
            </div>

          </div>
          <div className="drawer-side ">
            <label htmlFor="open-dashboard-menu" className="drawer-overlay "></label>
            <ul className="menu p-4 w-[260px] bg-[#ffffff] border-r border-[#00000018] shadow-2xl  text-slate-600 font-semibold " id='slideBar'>
              <div className="profile text-center py-8">
                <div className="">
                  <img className='w-[150px] h-[120px] m-auto' src={brandLogo} alt="brand logo" />
                  <button className='bg-[#23be2a] tracking-[2px]  hover:bg-[#47CC4D] hover:tracking-[3px] w-full rounded py-1 text-[#fff] mt-5 duration-700 ease-in-out'>Dispensary</button>
                </div>
              </div>
              {/* <!-- Sidebar content here --> */}

              <li className='py-[0px] text-lg hover:hover:bg-[#00000015] rounded'><CustomLink className='flex gap-4 capitalize items-center' to={'/dashboard'}> <span><MdDashboard /></span> Dashboard</CustomLink></li>

              <div className="collapse collapse-arrow py-[0px] text-lg border rounded">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">
                  <div className="flex items-center gap-3">
                    <img src={hummnerIcon} alt="" />
                    <p>Auction</p>
                  </div>
                </div>
                <div className="collapse-content">
                  <CustomLink className='flex gap-4 capitalize items-center ml-4 px-[5px] py-[8px] text-lg hover:bg-[#00000015] rounded' to={'/'}> <span><AiFillCarryOut /></span> All Auction</CustomLink>
                  <CustomLink className='flex gap-4 capitalize items-center ml-4 px-[5px] py-[8px] text-lg hover:bg-[#00000015] rounded' to={'/proposals'}> <span><AiFillCarryOut /></span>My Proposals</CustomLink>
                </div>
              </div>
              <li className='py-[0px] text-lg hover:bg-[#00000015] rounded'><CustomLink className='flex gap-4 capitalize items-center' to={'/setting'}> <span><AiFillSetting /></span> Setting</CustomLink></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexMin;