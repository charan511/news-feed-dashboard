import PropTypes from "prop-types";

export default function CategoryDropdown({ categories, active, onChange }) {
  return (
    <select
      className="form-select"
      value={active}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Select news category"
    >
      {categories.map((c) => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </select>
  );
}

CategoryDropdown.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
