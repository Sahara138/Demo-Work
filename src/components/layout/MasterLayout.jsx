import { useState } from "react";
import { BsPersonLinesFill, BsPersonPlusFill} from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdPropaneTank, MdSpaceDashboard } from "react-icons/md";


import { Link, NavLink, Outlet } from 'react-router-dom';
import OrderForm from "../Products/OrderForm";
import OrderList from "../Products/OrderList";
// import Loader from "../Loader";

const MasterLayout = () => {
    let [show, setShow] = useState(false)
        let [showCart] = useState(false)


    const sideBarItems = [
        {
            title:"Dashboard",
            icon: <MdSpaceDashboard className="text-2xl" />,
            path:"/",
            subMenu: []

        },
        {
            title:"Product",
            icon: <MdPropaneTank className="text-2xl" />,
            path:"/product",
            subMenu: []

        },
        {
            title:"Order",
            icon: <MdPropaneTank className="text-2xl" />,
            path:"/order",
            subMenu: [
                {
                    title:"Add Order",
                    icon: <BsPersonPlusFill className="text-2xl" />,
                    path:"/add-order"
                },
                {
                    title:"Order List",
                    icon: <BsPersonLinesFill className="text-2xl" />,
                    path:"/order-list"
                }

            ]

        },
        {
            title:"Customer",
            icon: <MdPropaneTank className="text-2xl" />,
            path:"/customer",
            subMenu: []

        },
        

        

    ]

    return (
        <div >
            <div className='bg-slate-100 min-h-screen '>
                <div className="navbar z-[9999] sticky">
                    <div className="w-full bg-slate-200 border border-slate-300 px-1 flex items-center justify-between rounded-2xl my-3">
                        <div className=" pl-10 py-2">
                            <Link to="/">
                                <img className="w-[70px] h-[70px] bg-cyan-500 rounded-full object-cover" src="" alt="" />
                            </Link>

                        </div>

                        <div className=" text-cyan-700 font-bold text-lg ">
                            <ul className=" flex justify-center items-center gap-6">
                                <Link to="/home"><li>Home</li></Link>
                                <Link><li>About</li></Link>
                                <Link><li>Contact</li></Link>
                            </ul>
                        </div>

                        <div className="relative">
                            <div onClick={()=>setShow(!show)} className=" h-[60px] w-[60px] rounded-full overflow-hidden mr-5 cursor-pointer">
                                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s" alt="" />

                            </div>

                            {
                                show &&
                                <div className="w-[300px] absolute text-center p-5 rounded-lg bg-slate-100 border border-slate-300 bg-opacity-[.9] right-0 top-16 ttom-0">
                                <IoClose onClick={()=>setShow(!show)} className="text-3xl text-cyan-700 cursor-pointer absolute left-2 top-2"/>

                                <div className="flex justify-center items-center mx-auto h-[70px] w-[70px] rounded-full overflow-hidden cursor-pointer">
                                    <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s" alt="" />

                                </div>
                                <h1 className="text-xl font-bold text-cyan-700 py-4">Sahara Islam</h1>
                                <div className="">
                                    <Link to='/profile'><button className="w-full px-5 py-2 rounded-lg font-bold  bg-cyan-700 text-white  hover:bg-white hover:text-cyan-700 hover:border-cyan-700  hover:border-2 mb-2 ">Profile</button></Link>
                                    <button className="w-full px-5 py-2 border-2 text-cyan-700 font-bold border-cyan-700 rounded-lg hover:bg-cyan-700 hover:text-white ">Log Out</button>
                                </div>
                                </div>

                            }

                            

                        </div>


                    </div>

                

            
                </div>


                <div className="min-h-screen flex justify-between px-[10px]">
                    {/* Left Side */}
                    <div className='w-[20%] pb-[20px]'>
                        <div className='p-5 bg-slate-200 border border-slate-300 h-full rounded-2xl'>


                            {
                                sideBarItems.map((item,i)=>{
                                    return(
                                        item.subMenu.length > 0
                                        ?
                                        <div key={i} className=" mb-[-20px] p-4 text-black">
                                            {/* // <input type="checkbox" /> */}
                                            <div className=" flex items-center gap-3 text-lg text-cyan-700 font-bold">{item.icon} {item.title}</div>
                                            <div className=" text-sm pl-[35px] text-cyan-500 mt-[0px] z-[9999]">
                                                
                                                    {
                                                    item.subMenu.map((feature, i) => {
                                                    return(
                                                        <div  key={i}>
                                                            <NavLink  to={feature.path} className={ ({isActive})=> (isActive? "flex items-center gap-3 text-md text-black font-semibold ":"flex items-center gap-3 text-md text-cyan-500 font-semibold") }>
                                                                {feature.icon} {feature.title} </NavLink> 
                                                            {
                                                                showCart &&
                                                                    <div>
                                                                        <OrderForm />
                                                                    </div>
                                                                
                                                                    
                                                            }
                                                            
                                                        </div>
                                                        
                                                    )
                                                        
                                                    })
                                                    
                                                    }
                                                    
                                            </div>
                                        </div>
                                        :
                                        <div >
                                            <NavLink key={i}  to={item.path} className={ ({isActive})=> (isActive? " flex items-center gap-3 text-lg p-4 mb-[-20px] rounded-xl text-black font-bold ":"flex items-center gap-3 text-lg p-4 mb-[-20px] rounded-xl text-cyan-700 font-bold") }>{item.icon} {item.title} </NavLink>
                                        </div>

                                    )
                                })
                            }



                        </div>
                    

                    </div>



                    {/* Right Side */}
                    <div className='w-[74%] py-5 '>

                        <div className='flex justify-between items-center'>
                            <h1 className='text-4xl text-cyan-700 text-center font-bold'>ProductMall</h1>
                            
                        </div>
                        
                        {/* <Loader /> */}

                        <Outlet></Outlet>
                    </div>

                </div>
                
                
            </div>
            
        </div>
    );
};

export default MasterLayout;