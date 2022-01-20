import { Divider } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "James Bond", text: "Learning react router" },
  { id: "q2", author: "Toby Brown", text: "Heelo World" },
  { id: "q3", author: "Bill Jones", text: "Learning is fun" },
];

const QuoteDetail = () => {
  const param = useParams();
  const quotes = DUMMY_DATA.find((quote) => quote.id === param.quoteId);
  // console.log(param.quoteId);

  if (!quotes) {
    return <p>no quotes found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quotes.text} author={quotes.author} />
      <div className="center">
        <Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Divider />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
