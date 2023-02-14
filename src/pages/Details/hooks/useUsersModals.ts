import { useModal } from "../../../hooks";

export const useUsersModals = () => {
  const {
    isModalOpen: isEditModalOpen,
    handleModalClose: handleEditModalClose,
    handleModalOpen: handleEditModalOpen,
  } = useModal();

  const {
    isModalOpen: isDeleteModalOpen,
    handleModalClose: handleDeleteModalClose,
    handleModalOpen: handleDeleteModalOpen,
  } = useModal();

  const modals = {
    edit: {
      isModalOpen: isEditModalOpen,
      handleModalClose: handleEditModalClose,
      handleModalOpen: handleEditModalOpen,
    },
    delete: {
      isModalOpen: isDeleteModalOpen,
      handleModalClose: handleDeleteModalClose,
      handleModalOpen: handleDeleteModalOpen,
    },
  };

  return modals;
};
