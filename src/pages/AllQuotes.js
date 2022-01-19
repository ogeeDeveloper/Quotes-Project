import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { id: "q1", author: "James Bond", text: "Learning react router" },
  { id: "q2", author: "Toby Brown", text: "Heelo World" },
  { id: "q3", author: "Bill Jones", text: "Learning is fun" },
];
const AllQuotes = () => {
  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  );
};

export default AllQuotes;
