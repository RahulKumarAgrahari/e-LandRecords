import { useEffect, useState } from 'react'
import Tabs from '../../Tabs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Signup() {
  const tabOptions = [{ title: 'User', value: 'user' }, { title: 'Admin', value: 'admin' }];
  const [activeTab, setActiveTab] = useState(tabOptions[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const activeTabVal = queryParams.get('role');

  useEffect(() => {
    if (!tabOptions.find((e) => e.value === activeTabVal)) {
      navigate({ search: `?role=${tabOptions[0].value}` }, { replace: true });
    }
  }, [activeTabVal]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage('All fields are required.');
      return;
    }

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setErrorMessage('Email is already taken. Please use a different email.');
      return;
    }

    // Create new user object
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      role: activeTabVal, // User role based on the active tab
    };

    // Add new user to users array
    users.push(newUser);

    // Save updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form fields and error message
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');

    // Redirect to login page after successful signup
    navigate('/login');
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
            <h2 className="text-2xl font-bold text-center text-gray-800">{activeTab.title} Signup</h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700">First Name:&nbsp;</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Last Name:&nbsp;</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password:&nbsp;</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                />
              </div>

              {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

              <button
                type="submit"
                className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Signup
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
