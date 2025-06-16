import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'
    
export default function ImageGallery({ items, onImageClick }) {
    if (items.length === 0) return null;

    return (
        <ul className={css.gallery}>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard item={item} onClick={() => onImageClick(item)} />
                </li>
            ))}
        </ul>
    )
}