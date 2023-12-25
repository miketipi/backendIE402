import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import CreateDRForm from '../components/DamageReport/CreateDRForm';
import UpdateDRForm from '../components/DamageReport/UpdateDRForm';
import DeleteDRForm from '../components/DamageReport/DeleteDRForm';

const DamageReport = () => {
  const [damageReports, setDamageReports] = useState([]);

  useEffect(() => {
    const getAllDamageReports = async () => {
      try {
        const res = await axios.get('http://localhost:4000/damagereport/all');
        setDamageReports(res.data);
      } catch (error) {
        console.error('Error fetching damage reports:', error.message);
      }
    };

    getAllDamageReports();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold m-auto">Danh sách báo cáo hỏng</h2>
        <CreateDRForm></CreateDRForm>
      </div>

      <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-zebra w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày
              </th>
              <th scope="col" className="px-6 py-3">
                Nội dung
              </th>
              <th scope="col" className="px-6 py-3">
                Nguyên nhân
              </th>
              <th scope="col" className="px-6 py-3">
                Tài khoản
              </th>
              <th scope="col" className="px-6 py-3">
                Đối tượng
              </th>
              <th scope="col" className="px-6 py-3">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {damageReports.length > 0 ? (
              damageReports.map((report, index) => (
                <tr
                  key={report._id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {formatDate(report.Date)}
                  </td>
                  <td className="px-6 py-4">{report.Content}</td>
                  <td className="px-6 py-4">{report.Cause}</td>
                  <td className="px-6 py-4">{report.IDAccount ? report.IDAccount.email : 'N/A'}</td>
                  <td className="px-6 py-4">
                    {report.IDBodyPolygon ? report.IDBodyPolygon.name : 'N/A'}
                  </td>
                  <td className="flex space-x-4 px-6 py-4">
                    <UpdateDRForm id={report._id}></UpdateDRForm>
                    <DeleteDRForm id={report._id}></DeleteDRForm>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="100%">
                  Không có báo cáo hỏng nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DamageReport;
