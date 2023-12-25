import React, { useState } from 'react'
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast';
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
const CreateBodypolygonForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [coordinate, setCoor] = useState('');
    const [heightt, setHeight] = useState(0);
    const [color, setColor] = useState('');
    const [error, setError] = useState('');   
    // const regex = /^\\-?\d+(\.\d+)?,\-?\d+(\.\d+)?,\-?\d+(\.\d+)?\?,\-?\d+(\.\d+)?,\-?\d+(\.\d+)?\])*$/; 
    const handleSubmit = async (e) => {
        e.preventDefault();
    //       if (!regex.test(coordinates)){
    //         setError('Chuỗi không hợp lệ');
    //   e.preventDefault();
    //       }
    let coor = coordinate;
    let arr = coor.replace(/\s/g, '').replace(/\[/g, '').replace(/\]/g, '').split(',');
    console.log(arr);
    let coordinates = [];
    for (let i = 0; i < arr.length; i += 3) {
        coordinates.push({x: parseFloat(arr[i]), y: parseFloat(arr[i + 1]), z: parseFloat(arr[i + 2])});
    }
    let height = parseFloat(heightt);
        // result.map(([x, y, z]) => ({x, y, z}));
        const body = {
            name,
            height,
            color,
            coordinates
        };
        console.log(body);
        let response = await axios.post('http://localhost:4000/bodypolygon/new', body);

        if (response.status !== 200) {
            showErrorToast(response.data.message);
            return;
        }

        setShowForm(false);
        showSuccessToast('Tạo mới BodyPolygon thành công, trang sẽ tải lại sau 3s!');
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    return (
        <>
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="mr-3 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                type="button"
                onClick={() => setShowForm(!showForm)}
            >
                Thêm mới
            </button>

            {showForm && (
                <>
                    <div className="fixed inset-0 z-20 flex items-center justify-center overflow-auto outline-none transition-all duration-200 focus:outline-none">
                        <div className="relative mx-auto w-[400px] max-w-3xl">
                            {/*content*/}
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className=" flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                                    <h3 className="text-3xl font-semibold">
                                        Create new bodypolygon
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
                                                        Name
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="text"
                                                            autoComplete="email"
                                                            required
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
                                                        Coordinates
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            autoComplete="name"
                                                            required
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setCoor(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Height
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="height"
                                                            name="height"
                                                            type="text"
                                                            autoComplete="height"
                                                            required
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setHeight(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="type"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Color
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="color"
                                                            name="color"
                                                            type="text"
                                                            autoComplete="color"
                                                            required
                                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(e) => setColor(e.target.value)}
                                                        />
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
                                {/*footer*/}
                                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                                    <button
                                        className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Đóng
                                        {error && <p>{error}</p>}
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

export default CreateBodypolygonForm