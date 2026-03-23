import s from './card.module.css'

export const Card = (imgScr, alt, title, text) => {
    return (
        <div className={s.card}>
            <img src={imgScr} alt={alt} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};