import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import UpdateEntityRepair from "../components/EntityRepairStatus/UpdateEntityRepairform";
const EntityRepairStatus = () => {
  const [entity, setentity] = useState([]);
  useEffect(() => {
    const getallentity = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/entityrepairstatus/all"
        );
        setentity(res.data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    getallentity();
  }, []);
  console.log(entity);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-start gap-8 p-10">
      <h3 className="font-bold text-xl">Thông tin phản ánh từ khách hàng</h3>
      <table className="table-zebra w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              User repaired
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Repair reason
            </th>
            <th scope="col" className="px-6 py-3">
              Poligon
            </th>
            <th scope="col" className="px-6 py-3">
              Start date
            </th>
            <th scope="col" className="px-6 py-3">
              Finish date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {entity.length > 0 ? (
            entity.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.user.name}</td>
                <td>{value.Type}</td>
                <td>{value.RepairReason}</td>
                <td>{value.bodypolygon.name}</td>
                <td>{formatDate(value.StartDate)}</td>
                <td>{formatDate(value.FinishDate)}</td>
                <td>
                  <p>
                    <button
                      className="p-1 bg-red-300 rounded-xl"
                      onClick={() => {
                        handleclick();
                      }}
                    >
                      delete
                    </button>
                    {/* <UpdateEntityRepair id={value._id}></UpdateEntityRepair> */}
                  </p>
                </td>
              </tr>
            ))
          ) : (
            <td className="px-6 py-4 text-center" colSpan="100%">
              No report here
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntityRepairStatus;
