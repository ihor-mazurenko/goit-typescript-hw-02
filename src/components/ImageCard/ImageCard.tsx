import css from './ImageCard.module.css'
import { Image } from '../../images-api';

interface ImageCardProps {
  item: Image;
  onClick: (image: Image) => void;
}

export default function ImageCard({ item, onClick }: ImageCardProps) {
    const { urls, alt_description } = item;
   
    return (
        <div onClick={() => onClick(item)} className={css.card}>
            <img className={css.image} src={urls.small} alt={alt_description || 'Image'} />
        </div>
    );
}