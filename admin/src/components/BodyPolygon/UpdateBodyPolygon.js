import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast';

const UpdateBodyPolygonForm = ({ id }) => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [height, setHeight] = useState('');
    const [color, setColor] = useState('');
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;

            try {
                const response = await axios.get(`http://localhost:4000/bodypolygon/getbyID/${id}`);
                const { name, description, height, color, face } = response.data;

                setName(name);
                setDescription(description);
                setHeight(height);
                setColor(color);
                setCoordinates(face.coordinates);
            } catch (error) {
                console.error('Error fetching BodyPolygon', error);
            }
        };

        fetchData();
    }, [id]);

    const handleCoordinateChange = (e, index, coordinateType) => {
        const updatedCoordinates = [...coordinates];
        updatedCoordinates[index][coordinateType] = e.target.value;
        setCoordinates(updatedCoordinates);
    };

    const handleRemoveCoordinate = (index) => {
        const updatedCoordinates = [...coordinates];
        updatedCoordinates.splice(index, 1);
        setCoordinates(updatedCoordinates);
    };

    const handleAddCoordinate = () => {
        setCoordinates([...coordinates, { x: '', y: '', z: '' }]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            coordinates,
            name,
            description,
            height,
            color,
        };

        try {
            const response = await axios.put(`http://localhost:4000/bodypolygon/update/${id}`, body);

            if (response.status !== 200) {
                showErrorToast(response.data.message);
                return;
            }

            setShowForm(false);
            showSuccessToast('BodyPolygon updated successfully. Reloading in 3 seconds.');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error('Error updating BodyPolygon', error);
            showErrorToast('Internal Server Error');
        }
    };

    return (
        <>
            <button
                className="mr-3 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setShowForm(!showForm)}
            >
                Sửa
            </button>

            {showForm && (
                <div className="fixed inset-0 z-20 flex items-center justify-center overflow-auto outline-none transition-all duration-200 focus:outline-none">
                    <div className="relative mx-auto w-[480px] max-w-3xl h-full">
                        {/* Modal Content */}
                        <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                            {/* Modal Header */}
                            <div className=" flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                                <h3 className="text-3xl font-semibold">Cập nhật Body Polygon</h3>
                                <button
                                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                >
                                    Đóng
                                </button>
                            </div>
                            {/* Modal Body */}
                            <div className="relative flex-auto p-6">
                                <form
                                    className="space-y-6"
                                    action="#"
                                    method="POST"
                                    onSubmit={handleSubmit}
                                >
                                    {/* Form Fields */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Description
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="height"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Height
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="color"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Color
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={color}
                                                onChange={(e) => setColor(e.target.value)}
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="coordinates"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Coordinates
                                        </label>
                                        <div className="mt-2">
                                            {coordinates.map((coord, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={coord[0]}
                                                        onChange={(e) => handleCoordinateChange(e, index, 'x')}
                                                        placeholder="X"
                                                        className="block w-1/3 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={coord[1]}
                                                        onChange={(e) => handleCoordinateChange(e, index, 'y')}
                                                        placeholder="Y"
                                                        className="block w-1/3 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={coord[2]}
                                                        onChange={(e) => handleCoordinateChange(e, index, 'z')}
                                                        placeholder="Z"
                                                        className="block w-1/3 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveCoordinate(index)}
                                                        className="text-red-500 hover:text-red-700 focus:outline-none"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={handleAddCoordinate}
                                                className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                                            >
                                                Add Coordinate
                                            </button>
                                        </div>
                                    </div>


                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Update BodyPolygon
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateBodyPolygonForm;