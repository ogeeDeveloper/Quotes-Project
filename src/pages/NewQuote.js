import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useNavigate();

  const AddQuoteHandler = (quoteData) => {
    console.log("Quotes Recived");
    // Redirect users to quotes page
    history.push("/quotes");
  };

  return (
    <div>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={AddQuoteHandler} />
    </div>
  );
};

export default NewQuote;
