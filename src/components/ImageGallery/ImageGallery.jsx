import { ImageCard } from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {


  return (
    <ul className={s.gallery}>
      {items.map(item => (
        <li className={s.listItem} key={item.id}>
          <ImageCard item={item} />
        </li>        
      ))}
    </ul>
    // {selectedItem && <ImageModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} selectedItem={selectedItem} />}
  );
};
