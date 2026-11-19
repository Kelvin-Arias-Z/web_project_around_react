import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;

  const imageComponent = {
  title: null,
  children: <ImagePopup card={props.card} />,
};
  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Me gusta"
          className={`card__like-button ${
            isLiked ? "card__like-button_is-active" : ""
          }`}
          type="button"
        />
      </div>
    </li>
  );
} 