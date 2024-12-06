import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className="bg-white">
            <section className="Hero h-screen">
                <div className="navbar ">
                    <div className="w-full bg-white flex items-center justify-between">
                        <div className="nav-start w-[20%] pl-10">
                            <Link to="/">
                                <img className="w-[80px] h-[80px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgFmJTSh7dB0ylecbyIAW5WyxijL0oFgh8w&s" alt="" />
                            </Link>
                            {/* <h1 className="font-bold text-black text-md mx-[10px] mt-[-20px] ">PetZone</h1> */}

                        </div>

                        <div className="nav-center w-[50%] text-cyan-700 font-bold text-lg ">
                            <ul className=" flex justify-center items-center gap-6">
                                <Link to="/home"><li>Home</li></Link>
                                <Link><li>About</li></Link>
                                <Link><li>How it works</li></Link>
                                <Link><li>Resources</li></Link>
                                <Link><li>Contact</li></Link>
                            </ul>
                        </div>

                        <div className="nav-end w-[20%] text-cyan-700 font-bold text-lg text-right pr-10 ">
                            <Link to="/registration"><button className="px-5 py-2 border-2  border-cyan-700 rounded-lg hover:bg-cyan-700 hover:text-white ">Sign Up</button></Link>
                        </div>
                    </div>

                

            
                </div>

                <div className="w-[95%] bg-cyan-700 h-[500px] rounded-2xl mx-auto flex justify-between items-center">
                    <div className="w-40% py-[100px]  px-[100px]">
                        <h1 className="text-4xl text-white font-bold mt-3 w-[450px] capitalize ">Pets are our family member now</h1>
                        <p className="text-md text-white font-normal mt-5 w-[500px] pr-4 ">Have you ever met a human being more loyal than your faithful pet? Dogs and cats know who their humans are and always show loyalty to their families.It is scientifically proven that pets can decrease levels of anxiety in their owners and provide comfort. Pets not only relieve anxiety, they can also improve your quality of life.</p>
                        <div className=" text-white font-bold text-lg mt-5">
                            <Link><button className="px-5 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-cyan-700">Contact Us</button></Link>
                        </div>

                    </div>


                    {/* <div className="w-40%">


                        <div className="card w-[80%] px-5 m-2 mx-5 flex flex-row justify-center gap-3">
                            <div className="img-1">
                                <img className="h-[150px] w-[150px] rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oUTYumzOQYT-0HIjh48RSaK4i4XAd87efYe-qLWql5FOf98oLMgyXxi7rZ_W3bWpxuE&usqp=CAU" alt="" />
                            </div>

                            <div className="img-2">
                                <img className="h-[150px] w-[150px] mt-[-40px] rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn_M0ZlMrT4kR3tcyyD__JNnFBEpSHcKtKtnw3GrsjuUHsfb_BWZfQj44uhhCjxrXSQ4&usqp=CAU" alt="" />
                                <img className="h-[150px] w-[150px] mt-3 rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZo0rC0Vo0CUnKl31NQErGpgLqV41e9PjnFZ07dTtPbAK7TdOwM3L2zGop43TtKRF8e5U&usqp=CAU" alt="" />
                                
                            </div>

                            <div className="img-3">
                                <img className="h-[150px] w-[150px] mt-8 rounded-lg object-cover" src="https://t3.ftcdn.net/jpg/07/08/36/08/360_F_708360814_1a6eCQzzfpMDoHjER8yLsR7Bxvhbzjit.jpg" alt="" />
                            </div>

                            <div className="img-4">
                                <img className="h-[100px] w-[100px] mt-10 rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU12QyFIvA3C5UVLM9t8UFfphUWsZc3NnSKR9a9Yc0gJREHarxTn6P2dJuYP3ueDeYYCU&usqp=CAU" alt="" />
                                
                            </div>

                        </div>
                        

                    </div> */}


                    <div className="w-50% ">
                        <div className="w-full h-[500px]">
                            <img className="w-[100%] h-[100%] rounded-r-lg object-cover"  src="https://www.clubpets.com.sg/wp-content/uploads/2020/04/4-surprising-similarities-between-dogs-and-their-owners-0.jpg" alt="" />
                        </div>

                    </div>
                    
                </div>

            </section>
            

        </div>
    );
};

export default HomePage;