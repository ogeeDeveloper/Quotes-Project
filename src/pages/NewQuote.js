import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const AddQuoteHandler = (quoteData) => {
    console.log("Quotes Recived");
  };

  return (
    <div>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={AddQuoteHandler} />
    </div>
  );
};

export default NewQuote;
