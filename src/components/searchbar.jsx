import PropTypes from 'prop-types'

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Search news"
    />
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
