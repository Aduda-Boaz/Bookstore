import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const BookList = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();
  const percentage = 70;
  return (
    <li>
      <div>
        <h2 className="title">{title}</h2>
        <span className="author">{author}</span>
        <h3 className="category">{category}</h3>
        <button type="button" className="button">Comments</button>
        <button type="button" className="button active" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
        <button type="button" className="button">Edit</button>
      </div>
      <div className="section2">
        <div className="oval">
          <div style={{ width: 65, height: 65 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h2 className="percent">67%</h2>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="chapter">
          <p className="current-chapter">Current Chapter</p>
          <p className="chapter-number">Chapter 17</p>
          <button type="button" className="update-btn submit">Update Progress</button>
        </div>
      </div>
    </li>
  );
};

BookList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default BookList;
