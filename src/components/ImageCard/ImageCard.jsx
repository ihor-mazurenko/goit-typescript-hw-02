import css from './ImageCard.module.css'

export default function ImageCard({ item, onClick }) {
    const { urls, alt_description } = item;
   
    return (
        <div onClick={() => onClick(item)} className={css.card}>
            <img className={css.image} src={urls.small} alt={alt_description} />
        </div>
    );
}