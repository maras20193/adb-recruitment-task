import { Modal } from "../../../../components";
import { DeleteModalBody } from "../DeleteModalBody/DeleteModalBody";
import { EditModalBody } from "../EditModalBody/EditModalBody";

type UserModalsType = {
  modals: {
    edit: {
      isModalOpen: boolean;
      handleModalClose: () => void;
      handleModalOpen: () => void;
    };
    delete: {
      isModalOpen: boolean;
      handleModalClose: () => void;
      handleModalOpen: () => void;
    };
  };
};

export const UserModalsContainer = ({ modals }: UserModalsType) => (
  <>
    <Modal
      isOpen={modals.edit.isModalOpen}
      onClose={modals.edit.handleModalClose}
      title="Edit user"
    >
      <EditModalBody />
    </Modal>
    <Modal
      isOpen={modals.delete.isModalOpen}
      onClose={modals.delete.handleModalClose}
      title="Delete user"
    >
      <DeleteModalBody />
    </Modal>
  </>
);
