import { useEffect, useState } from 'react'
import Tabs from '../../Tabs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const tabOptions = [{ title: 'User', value: 'user' }, { title: 'Admin', value: 'admin' }];
    const [activeTab, setActiveTab] = useState(tabOptions[0]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const activeTabVal = queryParams.get('role');
    
    // Set default tab if query param is invalid
    useEffect(() => {
        if (!tabOptions.find((e) => e.value === activeTabVal)) {
            navigate({ search: `?role=${tabOptions[0].value}` }, { replace: true });
        }
    }, [activeTabVal]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log(users)

        // Check if the user exists
        const existingUser = users.find(user => user.email === email && user.password === password);
        if (existingUser) {
            // Redirect to dashboard or home page on successful login
            navigate(`/${activeTabVal}-dashboard`);
        } else {
            // Display error message if credentials are invalid
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <>
            <div className='max-w-xl mx-auto mt-12'>
                <Tabs 
                    options={tabOptions} 
                    activeTab={activeTabVal} 
                    switchTab={(e) => {
                        navigate({ search: `?role=${e.value}` }, { replace: true });
                        setActiveTab(e);
                    }} 
                />
                <div className="flex items-center justify-center h-full mt-16">
                    <div className="card w-96 p-6">
                        <h2 className="text-2xl font-bold text-center text-gray-800">{activeTab.title} Login</h2>
                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <label className="block text-gray-700">Email:&nbsp;</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Password:&nbsp;</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

                            <button
                                type="submit"
                                className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Login
                            </button>
                        </form>

                        <p className="mt-4 text-center text-gray-600">
                            Forgot password? 
                            <Link to={{ pathname: '/password-reset' }} className="text-blue-500 hover:underline">
                                Forgot Password
                            </Link>
                        </p>
                        <p className="mt-4 text-center text-gray-600">
                            Don't have an account? 
                            <Link to={{ pathname: '/signup' }} className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
