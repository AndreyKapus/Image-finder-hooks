// import { useState } from 'react';
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

const PicModal = ({closeModal, modalOpen}) => {

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <img src={pic.hits.largeImageURL} alt='imag'/> */}
        <button onClick={closeModal}>close</button>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}

export default PicModal;
