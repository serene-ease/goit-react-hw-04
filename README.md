  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.body.style.overflow = "scroll";
    setIsOpen(false);
  }

  import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onAfterOpen, onRequestClose, selectedItem: { urls, alt_description, description } }) => {
    
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={onAfterOpen}
                onRequestClose={onRequestClose}
                className={s.modal}
                overlayClassName={s.backdrop}
            >
                <IconContext.Provider value={{ size: '3em', color: "rgba(253, 45, 126, 0.5)" }}>
                    <button className={s.button} onClick={onRequestClose}>
                        <IoMdCloseCircleOutline />
                    </button>
                </IconContext.Provider>

                <div className={s.container}>
                    <img className={s.image} src={urls.regular} alt={alt_description} width="600" />
                    <p className={s.desc}>{description}</p>
                </div>
            </Modal>
        </div>
    );
};