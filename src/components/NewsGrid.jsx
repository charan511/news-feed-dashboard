import PropTypes from 'prop-types'
import NewsCard from './newsCard'

export default function NewsGrid({ articles, loading }) {
  if (loading) {
    return (
      <div className="row g-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i}>
            <div className="card placeholder-glow" style={{ height: 330 }}>
              <div className="placeholder" style={{ height: 180, display: 'block' }} />
              <div className="card-body">
                <h5 className="card-title">
                  <span className="placeholder col-8" />
                </h5>
                <p className="card-text">
                  <span className="placeholder col-12" /><br />
                  <span className="placeholder col-10" /><br />
                  <span className="placeholder col-6" />
                </p>
                <span className="placeholder col-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="row g-4">
      {articles.map((a, idx) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={`${a.url}-${idx}`}>
          <NewsCard article={a} />
        </div>
      ))}
    </div>
  )
}

NewsGrid.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool
}
