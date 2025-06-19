import Modal from 'react-modal';
import { Image } from '../../images-api';
import css from './ImageModal.module.css'

interface ImageModalProps {
  isOpen: boolean;
  seletedImage: Image | null;
  onClose: () => void;
}

export default function ImageModal({ isOpen, seletedImage, onClose }: ImageModalProps) {
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
                    alt={seletedImage.alt_description || 'Image'}
                    className={css.img}
                />
            </div>
        </Modal>

    );
}