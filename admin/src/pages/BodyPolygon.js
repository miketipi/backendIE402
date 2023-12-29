import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateBodyPolygon from '../components/BodyPolygon/UpdateBodyPolygon'
import CreateBodypolygonForm from '../components/BodyPolygon/CreateBodyPolygonForm';
import DeleteBodyPolygonForm from '../components/BodyPolygon/DeleteBodyPolygonForm';
const Bodypolygon = () => {
  const [bodypolygon, setBodypolygon] = useState([]);

  useEffect(() => {
    const getAllBodypolygon = async () => {
      try {
        const res = await axios.get('http://localhost:4000/bodypolygon/all');
        setBodypolygon(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching bodypolygon:', error.message);
      }
    };

    getAllBodypolygon();
  }, []);


  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold m-auto">Danh sách bodypolygon</h2>
        <CreateBodypolygonForm></CreateBodypolygonForm>

        
      </div>

      <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">

        <table className="table-zebra w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Height
              </th>
              <th scope="col" className="px-6 py-3">
                Coordinates
              </th>
              <th scope="col" className="px-6 py-3">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {bodypolygon.length > 0 ? (
              bodypolygon.map((bodypolygon, index) => (
                <tr
                  key={bodypolygon._id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {bodypolygon.name}
                  </td>
                  <td className="px-6 py-4">{bodypolygon.color}</td>
                  <td className="px-6 py-4">{bodypolygon.height || 'Not update'}</td>
                  <td className="px-6 py-4">{bodypolygon.face.coordinates.map(coord => `[${coord.join(',')}]`).join(', ')}</td>
                  <td className="flex space-x-4 px-6 py-4">
                    <DeleteBodyPolygonForm id={bodypolygon._id}></DeleteBodyPolygonForm >
                    <UpdateBodyPolygon id={bodypolygon._id}></UpdateBodyPolygon>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="100%">
                  No Bodypolygon yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bodypolygon;
