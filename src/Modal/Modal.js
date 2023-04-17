import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const customStyles = {
  content: {
    width: '500px',
    height: '400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const PicModal = () => {
  const [modalOpen, setOpenModal] = useState(true);

  function openModal() {
    setOpenModal(true);
  }



  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <button onClick={closeModal}>close</button>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}

export default PicModal;
