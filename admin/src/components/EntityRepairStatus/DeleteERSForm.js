import React from 'react';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../Toast';

const DeleteERSForm = ({ id }) => {
  const deleteEntityRepairStatus = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/entityrepairstatus/${id}/delete`);

      if (response.status !== 200) {
        showErrorToast('Xóa Entity Repair Status thất bại');
        return;
      }

      showSuccessToast('Xóa Entity Repair Status thành công, trang sẽ tải lại sau 3 giây!');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error('Error deleting Entity Repair Status', error);
      showErrorToast('Đã có lỗi xảy ra khi xóa Entity Repair Status');
    }
  };

  return (
    <>
      <button
        data-modal-target="delete-ers-modal"
        data-modal-toggle="delete-ers-modal"
        className="block text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
        type="button"
        onClick={deleteEntityRepairStatus}
      >
        Xóa
      </button>
    </>
  );
};

export default DeleteERSForm;
