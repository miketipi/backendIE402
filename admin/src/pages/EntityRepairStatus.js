import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import CreateERSForm from '../components/EntityRepairStatus/CreateERSForm.js';
import UpdateERSForm from '../components/EntityRepairStatus/UpdateERSForm.js';
import DeleteERSForm from '../components/EntityRepairStatus/DeleteERSForm.js';

const EntityRepairStatus = () => {
  const [repairStatusList, setRepairStatusList] = useState([]);

  useEffect(() => {
    const getAllEntityRepairStatus = async () => {
      try {
        const res = await axios.get('http://localhost:4000/entityrepairstatus/all');
        setRepairStatusList(res.data);
      } catch (error) {
        console.error('Error fetching entity repair status:', error.message);
      }
    };

<<<<<<< HEAD
    getallentity();
<<<<<<< HEAD
    console.log(entity);
  }, [count]);
=======
  }, []);
  console.log(entity);
>>>>>>> 5e854a6e397d7970959d8aa16c7a34b6b470243b
  const handleclick = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/entityrepairstatus/${id}/delete`
      );
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
=======
    getAllEntityRepairStatus();
  }, []);
>>>>>>> 51212c7d3199de6eccec4421719a28996b11657d

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold m-auto">Danh sách tình trạng sửa chữa</h2>
        <CreateERSForm></CreateERSForm>
      </div>

      <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-zebra w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Người phụ trách
              </th>
              <th scope="col" className="px-6 py-3">
                Kiểu
              </th>
              <th scope="col" className="px-6 py-3">
                Lý do sửa chữa
              </th>
              <th scope="col" className="px-6 py-3">
                Đối tượng
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày bắt đầu
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày kết thúc
              </th>
              <th scope="col" className="px-6 py-3">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {repairStatusList.length > 0 ? (
              repairStatusList.map((status, index) => (
                <tr
                  key={status._id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {status.user.email}
                  </td>
                  <td className="px-6 py-4">{status.Type}</td>
                  <td className="px-6 py-4">{status.RepairReason}</td>
                  <td className="px-6 py-4">{status.bodypolygon.name}</td>
                  <td className="px-6 py-4">{formatDate(status.StartDate)}</td>
                  <td className="px-6 py-4">{formatDate(status.FinishDate)}</td>
                  <td className="flex space-x-4 px-6 py-4">
                    <DeleteERSForm id={status._id}></DeleteERSForm>
                    <UpdateERSForm id={status._id}></UpdateERSForm>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="100%">
                  No entity repair status available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EntityRepairStatus;
