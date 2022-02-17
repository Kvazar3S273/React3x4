import PropTypes from "prop-types";
const TextBoxField = ({ field, value, type, placeholder, onChangeHandler }) => {
  return (
    <div className="inputBx">
      <input
        type={type}
        placeholder={placeholder}
        id={field}
        name={field}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

TextBoxField.propTypes={
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired
}

TextBoxField.defaultProps={
    type:"text"
}
export default TextBoxField;
