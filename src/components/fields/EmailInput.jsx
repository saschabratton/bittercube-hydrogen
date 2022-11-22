import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
import Label from './label'
// ----------------------------------------------------------------------

EmailInput.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
}

EmailInput.defaultProps = {
  className: "",
  type: "email",
}

export default function EmailInput({
  className,
  hint,
  type,
  label,
  placeholder,
  required,
  field,
  form: { errors, touched }
}) {
  const status = touched[field.name] && errors[field.name] ? `invalid` : ``

  return (
    <div className={`form-group w-full ${className}`}>
      <Label label={label} hint={hint} className="sr-only">
        {touched[field.name] && errors[field.name] && <small className="float-right error">{errors[field.name]}</small>}
      </Label>
      <MaskedInput
        mask={emailMask}
        className={`w-full h-12 p-3 border-2 rounded-l-md bg-paper border-gold ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  )
}
