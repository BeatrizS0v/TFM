import './CommentCarousel.css';
import StarIcon from './StarIcon';


const CommentCarousel = ({ comments, carousel_id }) => {
  return (
    <div id={carousel_id} className="carousel slide" >
      <div className="carousel-indicators">
        {comments.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${carousel_id}`}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {comments.map((comment, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <h4 className="comment_title">{comment.user}</h4>
              <div style={{display: "flex", alignItems: "center", fontSize: "large"}}>
                {comment.rating}&nbsp;&nbsp;
                <StarIcon size="25px"/>
              </div>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev comment-button"
        type="button"
        data-bs-target={`#${carousel_id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next comment-button"
        data-bs-target={`#${carousel_id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CommentCarousel;