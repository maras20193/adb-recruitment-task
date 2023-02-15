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
  user: User;
};

export const UserModalsContainer = ({ modals, user }: UserModalsType) => (
  <>
    <Modal
      isOpen={modals.edit.isModalOpen}
      onClose={modals.edit.handleModalClose}
      title="Edit user"
    >
      <EditModalBody closeModal={modals.edit.handleModalClose} user={user} />
    </Modal>
    <Modal
      isOpen={modals.delete.isModalOpen}
      onClose={modals.delete.handleModalClose}
      title="Delete user"
    >
      <DeleteModalBody
        closeModal={modals.delete.handleModalClose}
        user={user}
      />
    </Modal>
  </>
);
