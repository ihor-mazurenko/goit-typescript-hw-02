import Modal from 'react-modal';
import css from './ImageModal.module.css'


export default function ImageModal({ isOpen, seletedImage, onClose }) {
    if (!seletedImage) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            className={css.modalContent}
        >
            <div className={css.wrapper}>
                <button className={css.button} onClick={onClose}>Close</button>
                <img
                    src={seletedImage.urls.regular}
                    alt={seletedImage.alt_description}
                    className={css.img}
                />
            </div>
        </Modal>

    );
}