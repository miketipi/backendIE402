import React from 'react';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast';

const DeleteDRForm = ({ id }) => {
    const deleteDamageReport = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/damagereport/delete/${id}`);

            if (response.status !== 200) {
                showErrorToast('Xóa damage report thất bại');
                return;
            }

            showSuccessToast('Xóa damage report thành công, trang sẽ tải lại sau 3 giây!');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error('Error deleting damage report', error);
            showErrorToast('Đã có lỗi xảy ra khi xóa damage report');
        }
    };

    return (
        <>
            <button
                data-modal-target="delete-dr-modal"
                data-modal-toggle="delete-dr-modal"
                className="block text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                type="button"
                onClick={deleteDamageReport}
            >
                Xóa
            </button>
        </>
    );
};

export default DeleteDRForm;
