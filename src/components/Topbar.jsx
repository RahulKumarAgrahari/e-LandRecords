import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Topbar = () => {
    const navigate = useNavigate()
    const [isSideBar, setSideBarOpen] = useState(false)
    const SideBarItem = [
        { path: '/', title: 'Home' },
        { path: '/service', title: 'Service' },
        { path: '/records', title: 'Records' },
        { path: '/about', title: 'About' },
    ]
    return (
        <>
            <header className="bg-primary text-white p-4 shadow-md">
                <div className="flex justify-between items-center">
                    <div>
                        {/* <button onClick={() => setSideBarOpen(true)} className="text-xl font-semibold">🍔</button> */}
                        <button onClick={() => navigate('/')} className="text-xl font-semibold">E-LandRecords</button>
                    </div>
                    {/* <button onClick={() => navigate('/login')} className="text-xl font-semibold">user</button> */}
                    <nav className="space-x-4">
                        {SideBarItem.map((navItem, index) => <NavLink to={navItem.path} key={index} className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-gray-300'}>{navItem.title}</NavLink>)}

                        {/* <button onClick={() => navigate('/login')} className="text-xl font-semibold">user</button>  */}
                    </nav>
                </div>
            </header>
            {/* <div className={`fixed inset-0 bg-black bg-opacity-50  transition-all duration-300 z-10 ${isSideBar ? 'block' : 'hidden'}`}>
                <div className={` bg-gray-500 text-white w-64 h-full transition-all duration-300 ${isSideBar ? 'block' : 'hidden w-0'}`}>
                    <header className="bg-primary p-4 text-white shadow-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <button onClick={() => setSideBarOpen(false)} className="text-xl font-semibold">🍔</button>
                                <button onClick={() => navigate('/')} className="text-xl font-semibold">E-LandRecords</button>
                            </div>
                        </div>
                    </header>
                    <nav className="flex flex-col mt-2">
                        {SideBarItem.map((sideBarItem, index) => {
                            return (
                                <NavLink to={sideBarItem.path} key={index} className={({ isActive }) => isActive ? 'text-yellow-400 hover:bg-primary  p-4' : 'hover:text-gray-300  hover:bg-primary p-4 '}>
                                    {sideBarItem.title}
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
            </div> */}
        </>

    );
}

export default Topbar;