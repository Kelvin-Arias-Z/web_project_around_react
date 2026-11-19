export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
    >
      <input
        className="popup__input"
        id="avatar-link"
        name="avatar"
        type="url"
        placeholder="Enlace a la imagen"
        required
      />
      <span
        className="popup__error"
        id="avatar-error"
      ></span>

      <button
        className="button popup__button"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}