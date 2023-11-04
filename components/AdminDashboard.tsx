import React, { useState } from 'react';

type Order = {
  title: string;
  description: string;
  date: string;
  price: number;
};

type Props = {
  orders: Order[];
};

const AdminDashboard: React.FC<Props> = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);

  const addOrder = () => {
    setOrderList([
      ...orderList,
      {
        title: '',
        description: '',
        date: '',
        price: 0,
      },
    ]);
  };

  return (
    <div className="p-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={addOrder}
      >
        +
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{order.title}</td>
              <td className="border px-4 py-2">{order.description}</td>
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;