import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateERSForm = ({ id }) => {
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [type, setType] = useState('');
  const [repairReason, setRepairReason] = useState('');
  const [userRepaired, setUserRepaired] = useState('');
  const [polygonId, setPolygonId] = useState('');
  const [userOptions, setUserOptions] = useState([]);
  const [polygonOptions, setPolygonOptions] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString(); // Chuyển đổi về định dạng ISO (YYYY-MM-DDTHH:mm:ss.sssZ)
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/entityrepairstatus/${id}`)
      .then(response => {
        const { StartDate, FinishDate, Type, RepairReason, user, bodypolygon } = response.data;

        setStartDate(formatDate(StartDate));
        setFinishDate(formatDate(FinishDate));
        setType(Type);
        setRepairReason(RepairReason);
        setUserRepaired(user._id);
        setPolygonId(bodypolygon._id);
      })
      .catch(error => {
        console.error('Error fetching entity repair status details', error);
      });

    axios.get('http://localhost:4000/userControl/users')
      .then(response => {
        const users = response.data.map(user => ({
          _id: user._id,
          email: user.email
        }));
        setUserOptions(users);
      })
      .catch(error => {
        console.error('Error fetching user emails', error);
      });

    axios.get('http://localhost:4000/bodypolygon/all')
      .then(response => {
        const polygons = response.data.map(polygon => ({
          _id: polygon._id,
          name: polygon.name
        }));
        setPolygonOptions(polygons);
      })
      .catch(error => {
        console.error('Error fetching body polygon names', error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      StartDate: startDate,
      FinishDate: finishDate,
      Type: type,
      RepairReason: repairReason,
      bodypolygon: polygonId,
      user: userRepaired,
    };
    console.log(body)

    try {
      const response = await axios.put(`http://localhost:4000/entityrepairstatus/${id}/update`, body);

      if (response.status !== 200) {
        showErrorToast(response.data.message);
        return;
      }

      setShowForm(false);
      showSuccessToast('Cập nhật Entity Repair Status thành công');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error('Error when updating Entity Repair Status', error);
      showErrorToast('Đã có lỗi xảy ra khi cập nhật Entity Repair Status');
    }
  };

  return (
    <>
      <button
        data-modal-target="update-ers-modal"
        data-modal-toggle="update-ers-modal"
        className="mr-3 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowForm(!showForm)}
      >
        Sửa
      </button>

      {showForm && (
        <>
          <div className="fixed inset-0 z-20 flex items-center justify-center overflow-auto outline-none transition-all duration-200 focus:outline-none">
            <div className="relative mx-auto w-[480px] max-w-3xl h-full">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">
                    Cập nhật Entity Repair Status
                  </h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <form
                        className="space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                      >
                        <div>
                          <label htmlFor="userRepaired" className="block text-sm font-medium leading-6 text-gray-900">
                            Người phụ trách
                          </label>
                          <div className="mt-2">
                            <select
                              id="userRepaired"
                              name="userRepaired"
                              value={userRepaired}
                              onChange={(e) => setUserRepaired(e.target.value)}
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                              <option value="" disabled hidden>
                                Chọn người phụ trách
                              </option>
                              {userOptions.map(user => (
                                <option key={user._id} value={user._id}>
                                  {user.email}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                            Kiểu
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              id="type"
                              name="type"
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="repairReason" className="block text-sm font-medium leading-6 text-gray-900">
                            Lý do sửa chữa
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="repairReason"
                              name="repairReason"
                              rows="3"
                              value={repairReason}
                              onChange={(e) => setRepairReason(e.target.value)}
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="polygonId" className="block text-sm font-medium leading-6 text-gray-900">
                            Đối tượng
                          </label>
                          <div className="mt-2">
                            <select
                              id="polygonId"
                              name="polygonId"
                              value={polygonId}
                              onChange={(e) => setPolygonId(e.target.value)}
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                              <option value="" disabled hidden>
                                Chọn đối tượng
                              </option>
                              {polygonOptions.map(polygon => (
                                <option key={polygon._id} value={polygon._id}>
                                  {polygon.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                            Ngày bắt đầu
                          </label>
                          <div className="mt-2">
                            <DatePicker
                              selected={new Date(startDate)}
                              onChange={(newDate) => setStartDate(newDate)}
                              dateFormat="dd-MM-yyyy"
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="finishDate" className="block text-sm font-medium leading-6 text-gray-900">
                            Ngày kết thúc
                          </label>
                          <div className="mt-2">
                            <DatePicker
                              selected={new Date(finishDate)}
                              onChange={(newDate) => setFinishDate(newDate)}
                              dateFormat="dd-MM-yyyy"
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Cập nhật
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-2">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowForm(false)}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-10 bg-black opacity-25"></div>
        </>
      )}
    </>
  );
};

export default UpdateERSForm;
