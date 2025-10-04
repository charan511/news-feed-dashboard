import PropTypes from 'prop-types'

export default function ErrorState({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>Something went wrong:</strong> {message || 'Unknown error.'}
    </div>
  )
}

ErrorState.propTypes = { message: PropTypes.string }
