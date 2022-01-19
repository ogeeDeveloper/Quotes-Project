import { Routes, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
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
  console.log(param.quoteId);

  if (!quotes) {
    return <p>no quotes found</p>;
  }

  return (
    <>
      <h1>{param.quoteId}</h1>
      <HighlightedQuote text={quotes.text} author={quotes.author} />
      <Routes>
        <Route
          path={`/quotes/${param.quoteId}/comments`}
          element={<Comments />}
        />
      </Routes>
    </>
  );
};

export default QuoteDetail;
