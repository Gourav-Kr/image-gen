import React, { useContext } from 'react';
import { Routes, Link, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { logo } from './assets'
import { Home, CreatePost, Login, Register } from './pages';
import { useLogout } from './hooks/useLogout'
import { useAuthContext } from './hooks/useAuthContext'
// import { AuthContext } from './context/authContext';

const App = () => {
  // console.log("Hell");
  const { logout } = useLogout()

  const { user } = useAuthContext;

  const handleClick = () => {
    logout()
  }

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <nav>
          {user &&
            <div>
              <button className='logout rounded-md' onClick={handleClick}>Log out</button>
            </div>}
          {!user &&
            <div>
              <Link to="/login" className='login-btn rounded-md'>Login</Link>
              {/* <Link to="/register" className='login-btn rounded-md'>Register</Link> */}
            </div>}
          <Link to="/create-post" className="font-inter font-medium bg-[#fff] text-[#6469ff] border-2 border-[#6469ff] px-4 py-2 rounded">Create</Link>
        </nav>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={user ? <CreatePost /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ?<Login /> : <Navigate to="/"/>} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes> 
      </main>
    </BrowserRouter>
  )
}

export default App;