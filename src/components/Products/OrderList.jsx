
import { useSelector } from "react-redux";

const OrderList = () => {
  const savedOrders = useSelector((state) => state.order.savedOrders);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Order List</h2>
      {savedOrders.length === 0 ? 
        <p>No orders saved yet.</p>
       : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">Customer Name</th>
              <th className="border border-gray-300 px-2 py-1">Email</th>
              <th className="border border-gray-300 px-2 py-1">Total Amount</th>
              <th className="border border-gray-300 px-2 py-1">Due</th>
            </tr>
          </thead>
          <tbody>
            {savedOrders.map((order, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2 py-1">
                  {order.customer.name}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {order.customer.email}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {order.totalAmount}
                </td>
                <td className="border border-gray-300 px-2 py-1">{order.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderList;
