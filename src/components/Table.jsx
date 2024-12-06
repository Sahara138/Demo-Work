import { RiTwitterXFill } from "react-icons/ri";

const Table = () => {
    return (
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
             <table className="w-full text-md text-center">
                        <thead className="">
                                <tr className="gap-3">
                                    <th className="px-6 py-3">Phone</th>
                                    <th className="px-6 py-3">Image</th>
                                    <th className="px-6 py-3">Quantity</th>
                                    <th className="px-6 py-3">Rate</th>
                                    <th className="px-6 py-3">Price</th>
                                    <th className="px-6 py-3">Note</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                        </thead>
                        <tbody className="">
                                <tr className="my-2 ">
                                    <td className="px-1 pl-2"><input type="text" placeholder="Phone" className="px-2 py-1  rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input className=" bg-white border-2 rounded-lg border-slate-300" type="file"/></td>
                                    <td className="px-1"><input type="text" placeholder="Quantity" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Rate" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Price" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Note" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    
                                    <td className=" px-1"><div className="relative w-[35px] h-[35px] text-slate-950 mx-auto border-2 rounded-lg border-slate-300 bg-white"><RiTwitterXFill className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"/></div></td>
                                </tr>
                                <tr className="my-2 ">
                                    <td className="px-1 pl-2"><input type="text" placeholder="Phone" className="px-2 py-1  rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input className=" bg-white border-2 rounded-lg border-slate-300" type="file"/></td>
                                    <td className="px-1"><input type="text" placeholder="Quantity" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Rate" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Price" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Note" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    
                                    <td className=" px-1"><div className="relative w-[35px] h-[35px] text-slate-950 mx-auto border-2 rounded-lg border-slate-300 bg-white"><RiTwitterXFill className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"/></div></td>
                                </tr>
                                <tr className="my-2 ">
                                    <td className="px-1 pl-2"><input type="text" placeholder="Phone" className="px-2 py-1  rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input className=" bg-white border-2 rounded-lg border-slate-300" type="file"/></td>
                                    <td className="px-1"><input type="text" placeholder="Quantity" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Rate" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Price" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className="px-1"><input type="text" placeholder="Note" className="px-2 py-1 rounded-lg border-2 border-slate-300 outline-none"/></td>
                                    <td className=" px-1"><div className="relative w-[35px] h-[35px] text-slate-950 mx-auto border-2 rounded-lg border-slate-300 bg-white"><RiTwitterXFill className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"/></div></td>
                                </tr>
                        </tbody>
                    </table> 
        </div>
            
        
    );
};

export default Table;