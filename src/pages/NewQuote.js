import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  // Add a new quote to the firebase database
  // The useHttp hook will execute the addQuote function
  const { sendRequest, status } = useHttp(addQuote);
  const history = useNavigate();

  useEffect(() => {
    // If the status is type completed redirect users to quote page
    if (status === "completed") {
      history("/quotes");
    }
  }, [status, history]);

  const AddQuoteHandler = (quoteData) => {
    // console.log("Quotes Recived");
    // Sends Requests
    sendRequest(quoteData);
    // Redirect users to quotes page
    // history.push("/quotes");
  };

  return (
    <div>
      <h1>New Quote</h1>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={AddQuoteHandler}
      />
    </div>
  );
};

export default NewQuote;
