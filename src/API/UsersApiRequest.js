import { toast } from "react-toastify";
import { BASE_URL } from '../helper/config';
import axios from "axios";
import {setAuthToken, setUserDetails} from "../helper/SessionHelper"

export async function RegistrationRequest(firstName,lastName,email,password,photo) {
    
    try{
        let url = BASE_URL + "/registration";
        let postBody ={
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            photo:photo
        }

        let response = await axios.post(url, postBody);

        if(response.status === 200){

            if(response.data.status === "fail"){
                if(response.data.data.keyPattern.email === 1){
                    toast.error("Email already exists");
                    return false;
                }
                else{
                    toast.error("Something went wrong")
                    return false
                }
            }
            else{
                toast.success("Registration Success")
                return true
            }
        }
        else{
            toast.error("Something went wrong");
            return false;
        }
    }
    catch(error){
        toast.error("Something went wrong!");
        console.log(error)

    }
}



export async function LoginRequest(email,password) {
    
    try{
        let url = BASE_URL + "/login";
        let postBody ={
            email:email,
            password:password
        }

        let response = await axios.post(url, postBody);

        if(response.status === 200){

            if(response.data.status === "fail"){
                if(response.data.data === "user not found"){
                    toast.error("user not found");
                    return {message :"user not found"};
                }
                else if(response.data.data === "Invalid Password"){
                    toast.error("Wrong password");
                    return {message : "Wrong password"};
                }
                else{
                    toast.error("Something went wrong")
                    return false
                }
            }
            else{
                setAuthToken(response.data.token);
                setUserDetails(response.data.data)
                // toast.success("Login Success")
                return true
            }
        }
        else{
            toast.error("Something went wrong");
            return false;
        }
    }
    catch(error){
        toast.error("Something went wrong!");
        console.log(error)

    }
}