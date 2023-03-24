import React from 'react';
import { Routes, Link, Route, BrowserRouter } from 'react-router-dom';
import { logo } from './assets'
import { Home, CreatePost, Login, Register } from './pages';
import { useLogout } from './hooks/useLogout'

const App = () => {
  // console.log("Hell");
  const { logout } = useLogout()

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
          <div className='logout'>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login" className='login-btn'>Login</Link>
            <Link to="/register" className='login-btn'>Register</Link>
            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
          </div>
        </nav>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;