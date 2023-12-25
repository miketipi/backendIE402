import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateDRForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState(new Date());
    const [content, setContent] = useState('');
    const [cause, setCause] = useState('');
    const [accountId, setAccountId] = useState('');
    const [bodyPolygonId, setBodyPolygonId] = useState('');
    const [accountOptions, setAccountOptions] = useState([]);
    const [bodyPolygonOptions, setBodyPolygonOptions] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách tài khoản từ server
        axios.get('http://localhost:4000/userControl/users')
            .then(response => {
                // Lưu cả _id và email từ dữ liệu nhận được
                const accounts = response.data.map(user => ({
                    _id: user._id,
                    email: user.email
                }));
                setAccountOptions(accounts);
            })
            .catch(error => {
                console.error('Error fetching user accounts', error);
            });

        // Gọi API để lấy danh sách tên đối tượng từ server
        axios.get('http://localhost:4000/bodypolygon/all')
            .then(response => {
                // Chỉ lấy phần name từ dữ liệu nhận được
                const names = response.data.map(bodyPolygon => ({
                    _id: bodyPolygon._id,
                    name: bodyPolygon.name
                }));
                setBodyPolygonOptions(names);
            })
            .catch(error => {
                console.error('Error fetching body polygon names', error);
            });
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            Date: date,
            Content: content,
            Cause: cause,
            IDAccount: accountId,
            IDBodyPolygon: bodyPolygonId,
        };

        console.log(body)
        try {
            const response = await axios.post('http://localhost:4000/damagereport/new', body);

            if (response.status !== 200) {
                showErrorToast(response.data.message);
                return;
            }

            setShowForm(false);
            showSuccessToast('Tạo mới damage report thành công');
            // Handle any other necessary actions after successful creation
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error('Error when creating damage report', error);
            showErrorToast('Đã có lỗi xảy ra khi tạo mới damage report');
        }
    };

    return (
        <>
            <button
                data-modal-target="create-dr-modal"
                data-modal-toggle="create-dr-modal"
                className="mr-3 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                type="button"
                onClick={() => setShowForm(!showForm)}
            >
                Thêm mới
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
                                        Tạo damage report
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
                                                    <label
                                                        htmlFor="date"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Ngày
                                                    </label>
                                                    <div className="mt-2">
                                                        <DatePicker
                                                            selected={date}
                                                            onChange={(newDate) => setDate(newDate)}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="content"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Nội dung
                                                    </label>
                                                    <div className="mt-2">
                                                        <textarea
                                                            id="content"
                                                            name="content"
                                                            rows="3"
                                                            required
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setContent(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="cause"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Nguyên nhân
                                                    </label>
                                                    <div className="mt-2">
                                                        <textarea
                                                            id="cause"
                                                            name="cause"
                                                            rows="3"
                                                            required
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setCause(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="accountId"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Tài khoản
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="accountId"
                                                            name="accountId"
                                                            value={accountId}
                                                            onChange={(e) => setAccountId(e.target.value)}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="" disabled hidden>
                                                                Chọn tài khoản
                                                            </option>
                                                            {accountOptions.map(account => (
                                                                <option key={account._id} value={account._id}>
                                                                    {account.email}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="bodyPolygonId"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Đối tượng
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="bodyPolygonId"
                                                            name="bodyPolygonId"
                                                            value={bodyPolygonId}
                                                            onChange={(e) => setBodyPolygonId(e.target.value)}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="" disabled hidden>
                                                                Chọn đối tượng
                                                            </option>
                                                            {bodyPolygonOptions.map(bodyPolygon => (
                                                                <option key={bodyPolygon._id} value={bodyPolygon._id}>
                                                                    {bodyPolygon.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Thêm
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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

export default CreateDRForm;