import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const { text, author, id } = props;
  return (
    <>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{text}</p>
          </blockquote>
          <figcaption>{author}</figcaption>
        </figure>
        <Link to={`/quotes/${id}`} className="btn">
          View Quote
        </Link>
      </li>
    </>
  );
};

export default QuoteItem;
