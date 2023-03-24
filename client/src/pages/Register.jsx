import { useState } from "react"
import { useRegister } from "../hooks/useRegister.js"

const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const { register, error, isLoading } = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await register(name,email, password)
    }

    return (
        <form className="register mt-16 max-w-3xl" onSubmit={handleSubmit}>
            <h3 className="font-extrabold text-[#222328] text-[22px] py-5">Register</h3>

            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading} className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register</button>
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading">loading...</div>}
        </form>
    )
}

export default Register