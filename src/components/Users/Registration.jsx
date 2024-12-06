import { RegistrationRequest } from "../../API/UsersApiRequest";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const Registration = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        setFirstNameError("");
    }

    const handleLastName = (e) =>{
        setLastName(e.target.value);
        setLastNameError("");
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
        setEmailError("");
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
        setPasswordError("");
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(firstName === ""){
            setFirstNameError("Please enter your first name")
        }
        if(lastName === ""){
            setLastNameError("Please enter your last name")
        }
        if(email === ""){
            setEmailError("Please enter your email")
        }
        if(password === ""){
            setPasswordError("Please enter your password")
        }
        if(firstName && lastName && email && password){
            console.log(firstName,lastName,email,password)
            setLoading(true);
            let profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV4ja40-ibVrtLHZp-bBstOGhQj0d02IL5Q&s.png";
            let result = await RegistrationRequest(firstName,lastName,email,password,profilePicture);
            if(result === true){
                setLoading(false)
                navigate("/login");
            }
            else{
                setLoading(false)
                setEmailError("Email already exists")
            }
        }
    }




    return(
        <div className="bg-slate-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-semibold text-cyan-700 mb-8">Registration</h1>

                <form onSubmit={handleSubmit}>
                    <input onChange={handleFirstName} type="text" placeholder="First Name" className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" />
                    <p className="text-red-600 mt-[-10px] mb-3">{firstNameError}</p>

                    <input onChange={handleLastName} type="text" placeholder="Last Name" className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" />
                    <p className="text-red-600 mt-[-10px] mb-3">{lastNameError}</p>

                    <input onChange={handleEmail} type="email" placeholder="Email" className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" />
                    <p className="text-red-600 mt-[-10px] mb-3">{emailError}</p>

                    <input onChange={handlePassword} type="password" placeholder="Password" className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" />
                    <p className="text-red-600 mt-[-10px] mb-5">{passwordError}</p>
                    {
                        loading
                        ?
                        <span className="loading loading-spinner loading-lg"></span>
                        :
                        <button
                        type="submit"
                        className="w-full py-2 px-4 bg-cyan-700 text-white font-bold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Submit
                        </button>
                    }

                </form>
                <p className='text-sm  text-center mb-2 mt-5  text-black'>Already have an account?<Link to='/login' className='text-cyan-700 font-semibold'><u>Login</u></Link>
                </p>

                <p className='text-sm  text-center mb-4  text-black'>Forgot your password?
                    <Link to='/forgot-password' className='text-cyan-700 font-semibold'><u>Reset it here!</u></Link>
                </p>
            </div>

        </div>
    )


};

export default Registration;