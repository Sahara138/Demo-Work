import { useSelector, useDispatch } from "react-redux";
import {
    updateCustomer,
    addOrderItem,
    updateOrderItem,
    deleteOrderItem,
    calculateTotals,
    saveOrder,
    resetOrderForm,
} from "../../redux/orderSlice";
// import { RiTwitterXFill } from "react-icons/ri";
import Table from "../Table";
import { useNavigate } from "react-router-dom";


const OrderForm = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { customer, orderItems, subtotal, totalQuantity, totalAmount, shippingCharge,vat, discount, advance, due } = useSelector(
        (state) => state.order
      );
    
      const handleCustomerChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateCustomer({ [name]: value }));
      };
    
      const handleAddOrderItem = () => {
        dispatch(addOrderItem());
      };
    
      const handleOrderItemChange = (index, field, value) => {
        dispatch(updateOrderItem({ index, field, value }));
        dispatch(calculateTotals()); // Recalculate totals after change
      };
    
      const handleDeleteOrderItem = (index) => {
        dispatch(deleteOrderItem(index));
        dispatch(calculateTotals()); // Recalculate totals after deletion
      };

      const handleSaveOrder = () => {
        dispatch(saveOrder()); // Save the order to Redux state
        dispatch(resetOrderForm()); // Reset the form
        navigate("/order-list"); // Navigate to the order list page
      };
    
      const handleClose = () => {
        navigate('/');
      };

    
    return (
        <div className="w-[70%] h-[80%] overflow-y-auto  z-[9999] mx-auto absolute p-5 rounded-lg bg-slate-100 border border-slate-300 bg-opacity-[.9] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-full overflow-auto">
                <h2 className="mb-8 font-bold text-lg">Add New Order</h2>
                <div className="w-full flex flex-wrap justify-between items-center pb-2 border-dashed border-b-2 border-gray-400">
                    <div className="w-[48%] flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                            <label className="w-[30%]">Wholeseller<span className="text-red-500">*</span>:</label>
                            <select
                                type="text"
                                name="name"
                                value={customer.name}
                                onChange={handleCustomerChange}
                                className="w-[65%] px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Select A Marketer"
                                >
                                    <option value="">Select a Wholeseller</option>
                                    <option value="Marketer1">Wholeseller 1</option>
                                    <option value="Marketer2">Wholeseller 2</option>
                                </select>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="w-[30%]">Customer Name<span className="text-red-500">*</span>:</label>
                            <input
                                type="text"
                                name="name"
                                value={customer.name}
                                onChange={handleCustomerChange}
                                className="w-[65%] px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Customer Name"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <label>Customer Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={customer.email}
                                onChange={handleCustomerChange}
                                className="w-[65%] px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Customer Email"
                            />
                            </div>
                    </div>
                    <div className="w-[48%] flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                            <label>Marketer:</label>
                            <select
                                type="text"
                                name="name"
                                value={customer.name}
                                onChange={handleCustomerChange}
                                className="w-[65%] px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Select A Marketer"
                                >
                                    <option value="">Select a marketer</option>
                                    <option value="Marketer1">Marketer 1</option>
                                    <option value="Marketer2">Marketer 2</option>
                                </select>

                            
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <label>Customer Mobile<span className="text-red-500">*</span>:</label>
                            <input
                                type="text"
                                name="mobile"
                                value={customer.mobile}
                                onChange={handleCustomerChange}
                                className="w-[65%] px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Customer Mobile"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <label>Customer Address<span className="text-red-500">*</span>:</label>
                            <textarea
                                type="address"
                                name="address"
                                value={customer.address}
                                onChange={handleCustomerChange}
                                className="w-[65%] px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Customer Address"
                            />
                        </div>
                    </div>
                
                </div>

                <div className="pb-8 border-dashed border-b-2 border-gray-400">
                   <Table 
                   orderItems={orderItems}
                   onOrderItemChange={handleOrderItemChange}
                   onDeleteOrderItem={handleDeleteOrderItem}/>
                </div>
                
            
                {/* {orderItems && orderItems.map((item, index) => (
                <div key={index}>
                    <input
                    type="text"
                    placeholder="Phone"
                    value={item.phone}
                    onChange={(e) =>
                        handleOrderItemChange(index, "phone", e.target.value)
                    }
                    />
                    <input
                    type="number"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(e) =>
                        handleOrderItemChange(index, "quantity", e.target.value)
                    }
                    />
                    <input
                    type="number"
                    placeholder="Rate"
                    value={item.rate}
                    onChange={(e) =>
                        handleOrderItemChange(index, "rate", e.target.value)
                    }
                    />
                    <span>Price: {item.price}</span>
                </div>
                ))} */}
        
        
                
                
        
                <div className="text-right">
                    <p className="my-2"><label>Total Quantity<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={totalQuantity}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                onChange={(e) =>
                                    handleOrderItemChange( "phone", e.target.value)
                                }
                                placeholder="Total Quantity"
                            /></p>
                    <p className="my-2"><label>Subtotal<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={subtotal}
                                // onChange={handleCustomerChange}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Subtotal"
                            /></p>
                    <p className="my-2"><label >Shipping Charge<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={shippingCharge}
                                // onChange={handleCustomerChange}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Shipping Charge"
                            /></p>
                    <p className="my-2"><label>Vat<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={vat}
                                // onChange={handleCustomerChange}
                                className="ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Vat"
                            /></p>
                    <p className="my-2"><label>Discount<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={discount}
                                // onChange={handleCustomerChange}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Discount"
                            /></p>
                    <p className="my-2"><label>Total Amount<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={totalAmount}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Total Amount"
                            /></p>
                    <p className="my-2"><label >Advance<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={advance}
                                // onChange={handleCustomerChange}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Advance"
                            /></p>
                    <p className="my-2"><label >Due<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={due}
                                // onChange={handleCustomerChange}
                                className=" ml-4 px-2 py-1 text-gray-500 border-2 border-gray-400 rounded-md outline-none"
                                placeholder="Due"
                            /></p>
                    
                </div>
                <div className="text-right mt-10">
                    
                    <button className="bg-slate-200 text-gray-400 border border-gray-400 px-4 py-1 ml-2 rounded-lg font-semibold" onClick={handleClose}>Close</button>
                    <button className="bg-sky-500 text-white px-4 py-1 ml-2 rounded-lg font-semibold" onClick={handleAddOrderItem}>Add New Row</button>
                    <button className="bg-lime-400 text-white px-4 py-1 ml-2 rounded-lg font-semibold" onClick={handleSaveOrder}>Save</button>
                </div>
            </div>
        </div>
                                                                        
        
    
    );
  };

export default OrderForm;