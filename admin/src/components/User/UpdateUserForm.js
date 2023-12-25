import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast'

const UpdateUserForm = ({ id }) => {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchPlans = async () => {
            if (!id) return;

            const res = await axios.get(`http://localhost:4000/userControl/users/${id}`);
            setEmail(res.data.email);
            setName(res.data.name);
            setPhone(res.data.phone);
            setRole(res.data.admin);
            setPassword(res.data.password);
        };

        fetchPlans();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            email,
            name,
            phone,
            admin : role,
            password,
        };

        console.log(body);
        let response = await axios.put(`http://localhost:4000/userControl/users/${id}`, body);

        if (response.status !== 200) {
            showErrorToast(response.data.message);
            return;
        }

        setShowForm(false);
        showSuccessToast('Cập nhật thông tin tài khoản thành công, trang sẽ tải lại sau 3s!');
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    return (
        <>
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
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
                                <div className=" flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                                    <h3 className="text-3xl font-semibold">
                                        Update user
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6">
                                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                            <form
                                                className="space-y-6"
                                                action="#"
                                                method="POST"
                                                onSubmit={handleSubmit}
                                            >
                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Email
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="text"
                                                            autoComplete="email"
                                                            required
                                                            defaultValue={email}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Password
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="password"
                                                            required
                                                            defaultValue={password}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Name
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            autoComplete="name"
                                                            required
                                                            defaultValue={name}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Phone
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="phone"
                                                            name="phone"
                                                            type="text"
                                                            autoComplete="phone"
                                                            required
                                                            defaultValue={phone}
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setPhone(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Vai trò
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="role"
                                                            name="role"
                                                            required
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setRole(e.target.value)}
                                                            defaultValue={role}
                                                        >
                                                            <option value="false">User</option>
                                                            <option value="true">Admin</option>
                                                        </select>
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
                                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
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
    )
}

export default UpdateUserForm