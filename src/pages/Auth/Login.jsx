import { useEffect, useState } from 'react'
import Tabs from '../../Tabs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
    const tabOptions = [{ title: 'User', value: 'user' }, { title: 'Admin', value: 'admin' }]
    const [activeTab, setActiveTab] = useState({})
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const queryParams = new URLSearchParams(location.search);
    const activeTabVal = queryParams.get('role');
    useEffect(() => {
        if (!tabOptions.find((e) => e.value == activeTabVal)) {
            navigate({ search: `?role=${tabOptions[0].value}` },{replace:true})
        }
    }, [activeTabVal])
    return (
        <>
            <div className='max-w-xl mx-auto' >
                <Tabs options={tabOptions} activeTab={activeTabVal} switchTab={(e) => {
                    navigate({ search: `?role=${e.value}` })
                    setActiveTab(e)
                }} />
                <div className="flex items-center justify-center h-full mt-16">
                    <div className="card w-96">
                        <h2 className="text-2xl font-bold text-center text-gray-800">{activeTab.title} Login</h2>
                        <form className="mt-6" onSubmit={(e) => {
                            e.preventDefault()
                            console.log(e)
                        }} >

                            <div className="mt-4">
                                <label className="block text-gray-700">Email:&nbsp;</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Password:&nbsp;</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Login

                            </button>
                        </form>
                        <p className="mt-4 text-center text-gray-600">
                            Don't have an account? <Link to={{ pathname: '/signup' }} className="text-blue-500 hover:underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

