import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'
import { Image } from "../../images-api";

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (image: Image) => void;
}
    
export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
    if (items.length === 0) return null;

    return (
        <ul className={css.gallery}>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard item={item} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    )
}