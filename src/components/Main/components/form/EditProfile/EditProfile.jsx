export default function EditProfile() {
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
        type="text"
      />
      <span className="popup__error" id="name-error"></span>

      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        required
        type="text"
      />
      <span className="popup__error" id="description-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}