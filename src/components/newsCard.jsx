import PropTypes from 'prop-types'

export default function NewsCard({ article }) {
  const { urlToImage, title, description, url, source, author, publishedAt } = article
  const date = publishedAt ? new Date(publishedAt).toLocaleString() : ''

return (
    <div className="card h-100 shadow-sm">
        {urlToImage && (
            <img
                src={urlToImage}
                className="card-img-top"
                alt={title}
                style={{ objectFit: 'cover', height: 180 }}
            />
        )}
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            {description && (
                <p className="card-text news-description">{description}</p>
            )}
            <div className="mt-auto d-flex justify-content-between align-items-center">
                <div className="card-footer-text">
                    <span>{source?.name || "Unknown"}</span>
                    {author && <span>· {author}</span>}
                    {date && <span>· {date}</span>}
                </div>
                {url && (
                    <a
                        className="btn btn-sm btn-outline-primary"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read
                    </a>
                )}
            </div>
        </div>
    </div>
)
}

NewsCard.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    source: PropTypes.object,
    author: PropTypes.string,
    publishedAt: PropTypes.string
  }).isRequired
}
