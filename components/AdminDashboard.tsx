import React, { useState } from 'react';

type Order = {
  title: string;
  description: string;
  date: string;
  price: number;
  [key: string]: string | number;
};

type Props = {
  orders: Order[];
};

const AdminDashboard: React.FC<Props> = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);
  const [editIndex, setEditIndex] = useState(-1);
  const [editField, setEditField] = useState('');
  const [editValue, setEditValue] = useState('');

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

  const handleEdit = (index: number, field: string, value: string) => {
    setEditIndex(index);
    setEditField(field);
    setEditValue(value);
  };

  const handleUpdate = (index: number, field: string, value: string) => {
    const updatedOrders = [...orderList];
    updatedOrders[index][field] = value;
    setOrderList(updatedOrders);
    setEditIndex(-1);
    setEditField('');
  };

  return (
    <div className="bg-white p-6">
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addOrder}
      >
        +
      </button>
      <table className="w-full table-auto">
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
              {Object.keys(order).map((field, fieldIndex) => (
                <td key={fieldIndex} className="border px-4 py-2" onClick={() => handleEdit(index, field, String(order[field]))}>
                  {editIndex === index && editField === field ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => handleUpdate(index, field, editValue)}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          handleUpdate(index, field, editValue);
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    order[field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;