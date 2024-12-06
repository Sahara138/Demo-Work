import { LoginRequest } from "../../API/UsersApiRequest";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        setEmailError("");
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        setPasswordError("");
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
    
        if(email === ""){
            setEmailError("Please enter your email")
        }
        if(password === ""){
            setPasswordError("Please enter your password")
        }
        if( email && password){
            console.log(email,password)
            setLoading(true);
            let result = await LoginRequest(email,password);
            if(result === true){
                toast.success("Login Success")
                setLoading(false);
                // window.location.href = "/dashbord";
                navigate("/home");
            }
            else{
                setLoading(false);
                if(result.message === "Wrong password"){
                    setPasswordError(result.message)
                }
                if(result.message === "user not found"){
                    setPasswordError(result.message)
                }
            }
        }
    }




    return(
        <div className="bg-slate-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl text-center font-semibold text-cyan-700 mb-8">Login</h1>

                <form onSubmit={handleSubmit}>

                    <input onChange={handleEmailChange} type="email" placeholder="Email" className="w-full px-4 py-1 rounded-md outline-none border border-gray-300 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" />
                    <p className="text-red-600 mt-[-10px] mb-3">{emailError}</p>

                    <input onChange={handlePasswordChange} type="password" placeholder="Password" className="w-full px-4 py-1 rounded-md outline-none border border-gray-300  bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" />
                    <p className="text-red-600 mt-[-10px] mb-5 ">{passwordError}</p>
                    {
                        loading
                        ?
                        <span className="loading loading-spinner loading-lg"></span>
                        :
                        <button
                        type="submit"
                        className="w-full py-2 px-4 bg-cyan-700 text-white font-bold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Login
                        </button>
                    }

                </form>
                <p className='text-sm  text-center mb-2 mt-5  text-black'> Don't have an account?<Link to='/registration' className='text-cyan-700 font-semibold'><u>Registration</u></Link>
                </p>

                <p className='text-sm  text-center mb-4  text-black'>Forgot your password?
                    <Link to='/forgot-password' className='text-cyan-700 font-semibold'><u>Reset it here!</u></Link>
                </p>
            </div>

        </div>
    )


};

export default Login;