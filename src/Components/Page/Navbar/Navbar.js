import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';


const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	console.log(user);
	const logOut = () => {
		signOut(auth);
	};
	if (loading) {
		return <Loading></Loading>
	}
	if (error) {
		return console.log('Please try agin');
	}
	return (
		<nav className='container mx-auto'>
			<div className="navbar bg-[#fff] shadow-2xl z-[1111] sticky">
				<div className="flex-1">
					<p className="text-base"><span className='text-slate-500'>Auction/</span>All Auction</p>
				</div>
				<div className="flex-none">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<AiOutlineBell className='text-2xl' />
								<span className="badge badge-sm indicator-item">8</span>
							</div>
						</label>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<BiMessageRoundedDots className='text-2xl' />
								<span className="badge badge-sm indicator-item">2</span>
							</div>
						</label>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
								<span className="badge badge-sm indicator-item">5</span>
							</div>
						</label>
						<div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
							<div className="card-body">
								<span className="font-bold text-lg">5 Items</span>
								<span className="text-info">Subtotal: $999</span>
								<div className="card-actions">
									<button className="btn btn-primary btn-block">View cart</button>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								{/* <img src="https://placeimg.com/80/80/people" alt='' /> */}
								{
									user?.photoURL ? <img src={user.photoURL} alt='' /> : <img src="https://i.ibb.co/Ct43kdn/image-removebg-preview-6.png" alt='' />
								}
							</div>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52">
							<li className='hover:bg-[#0000001c]'>
								<p className="justify-between">
									Profile
									<span className="badge">New</span>
								</p>
							</li>
							<li className='hover:bg-[#0000001c]'><button>Settings</button></li>
							{
								user ? <li className='hover:bg-[#0000001c]'><button onClick={logOut}>Logout</button></li> : <li className='hover:bg-[#0000001c]'><Link to='/login' >Login</Link></li>
							}
							
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;