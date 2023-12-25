import React from 'react'
import { showSuccessToast, showErrorToast } from '../Toast'
import axios from 'axios';

const DeleteBodyPolygonForm = ({ id }) => {
    const deletebodypolygon = async (e) => {
        const res = await axios.delete(`http://localhost:4000/bodypolygon/delete/${id}`);

        if (res.status !== 200) {
            showErrorToast('Delete failed');
            return;
        }

        showSuccessToast('Xóa bodypolygon thành công, trang sẽ tải lại sau 3s!');
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    return (
        <>
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                type="button"
                onClick={deletebodypolygon}
            >
                Xóa
            </button>
        </>
    )
}

export default DeleteBodyPolygonForm;