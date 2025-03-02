import { NavLink } from "react-router-dom"
import Board from "../components/Board"
import Tabs from "../Tabs"

export default () => {
    const EfilesTab = [
        { title: "none", value: "mdmbfns" },
        { title: "none1", value: "mdmbfns2" },
        { title: "none2", value: "mdmbfns3" }
    ]
    const SideBarItem = [
        { path: '/', title: 'Home' },
        { path: '/service', title: 'Service' },
        { path: '/records', title: 'Records' },
        { path: '/about', title: 'About' },
    ]

    return (
        <>
            <div className="flex" >
                <div>
                    <div className={` inset-0 bg-black bg-opacity-50  transition-all duration-300 z-10 h-full`}>
                        <div className={` bg-gray-500 text-white w-64 h-full transition-all duration-300 border-2 border-solid `}>
                            {/* <header className="bg-primary p-4 text-white shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <button onClick={() => setSideBarOpen(false)} className="text-xl font-semibold">🍔</button>
                                        <button onClick={() => navigate('/')} className="text-xl font-semibold">E-LandRecords</button>
                                    </div>
                                </div>
                            </header> */}
                            <div>
                                <div>
                                    <img className="mx-auto rounded-xl overflow-hidden m-1" height="100" width="100" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
                                    <p className="text-center font-bold text-xl" >name</p>
                                </div>
                            </div>
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
                    </div>
                </div>
                <div className="m-12 grid grid-cols-2 gap-5 max-w-[900px] grow" >
                    <div className="max-w-[90%] h-[300px] border-4 border-blue-300 overflow-hidden rounded-xl border-solid" >
                        <Board title="e-files" >
                            <Tabs options={EfilesTab} activeTab={'mdmbfns'} />
                            <div className="pt-2 px-2" >
                                No Record Found
                            </div>
                        </Board>
                    </div>
                    <div className="max-w-[90%] h-[300px] border-4 border-blue-300 overflow-hidden rounded-xl border-solid" >
                        <Board title="e-files" >
                            <div className="pt-2 px-2" >
                                No Record Found
                                <table className="w-full" >
                                    <tbody>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Board>
                    </div>
                    <div className="max-w-[90%] h-[300px] border-4 border-blue-300 overflow-hidden rounded-xl border-solid" >
                        <Board title="e-files" >
                            <div className="pt-2 px-2" >
                                No Record Found
                                <table className="w-full" >
                                    <tbody>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] bg-gray-100" ><div className="w-full" ></div></tr>
                                        <tr className="h-[20px] " ><div className="w-full" ></div></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Board>
                    </div>
                    <div className="max-w-[90%] h-[300px] border-4 border-blue-300 overflow-hidden rounded-xl border-solid" >
                        <Board title="e-files" >
                            <Tabs options={EfilesTab} activeTab={'mdmbfns'} />
                            <div className="pt-2 px-2" >
                                No Record Found
                            </div>
                        </Board>
                    </div>
                </div>
            </div>
        </>
    )
}